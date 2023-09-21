import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  createPost(title: string, body: string): Post {
    const newPost = new Post(new Date().toString(), title, body);
    this.posts.push(newPost);
    return newPost;
  }

  getPosts() {
    return [...this.posts];
  }

  getPostById(id) {
    const post = this.posts.find((post) => post.id === id);
    if (post) return { ...post };
    throw new NotFoundException('Could not find post');
  }
}
