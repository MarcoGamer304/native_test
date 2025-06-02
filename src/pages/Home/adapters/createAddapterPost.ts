import { TEndpointPost } from "../models/types/TEndpointPost";
import { TPost } from "../models/types/TPost";

export const createAddapterPost = (post: TEndpointPost): TPost => {
  return {
    id: post.id,
    user: post.user,
    avatar: post.avatar,
    message: post.message,
    comments: post.comments,
    likes: post.likes,
    shares: post.shares,
    bookmark: post.bookmark,
    image: post.image,
  };
};

export const createAddapterAllPost = (post: TEndpointPost[]): TPost[] => {
  return post.map((post) => ({
    id: post.id,
    user: post.user,
    avatar: post.avatar,
    message: post.message,
    comments: post.comments,
    likes: post.likes,
    shares: post.shares,
    bookmark: post.bookmark,
    image: post.image,
  }));
};
