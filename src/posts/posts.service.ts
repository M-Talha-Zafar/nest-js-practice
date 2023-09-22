import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './post.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async getPosts(): Promise<Post[]> {
    return this.postModel.find({});
  }

  async createPost(title: string, body: string): Promise<Post> {
    return this.postModel.create({ title, body });
  }

  async getPostById(id: string): Promise<Post> {
    try {
      const post = await this.postModel.findById(id.toString());
      if (!post) throw new Error();
      return post;
    } catch (error) {
      throw new NotFoundException('Could not find post');
    }
  }

  async deletePost(id: string): Promise<Post> {
    const deletedPost = await this.postModel.findByIdAndDelete(id);
    if (!deletedPost) throw new NotFoundException('Could not delete post');
    return deletedPost;
  }

  async updatePost(id: string, updatedPost: Post): Promise<Post> {
    return this.postModel.findByIdAndUpdate(id, updatedPost, { new: true });
  }
}
