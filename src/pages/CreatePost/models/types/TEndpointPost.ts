export type TEndpointPost = {
  id: number;
  user_id: number;
  avatar: string;
  message: string;
  comments?: any;
  likes: number;
  shares: number;
  bookmark: boolean;
  image?: FormData;
  created_at: Date | any;
  updated_at: Date | any;
};
