import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostType } from './post.model';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  async createPost(
    @Body('title') title: string,
    @Body('body') body: string,
  ): Promise<PostType> {
    return this.postService.createPost(title, body);
  }

  @Get()
  async getPosts(): Promise<PostType[]> {
    return this.postService.getPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<PostType> {
    return this.postService.getPostById(id);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<PostType> {
    return this.postService.deletePost(id);
  }

  @Put(':id')
  updatePost(
    @Body('title') title: string,
    @Body('body') body: string,
    @Param('id') id: string,
  ): Promise<PostType> {
    return this.postService.updatePost(id, { id, title, body });
  }
}
