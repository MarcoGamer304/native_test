export type TEndpointPost = {
  id: number;
  user: string;
  avatar: string;
  message: string;
  comments: string | string[];
  likes: number;
  shares: number;
  bookmark: boolean;
  image?: string;
};
