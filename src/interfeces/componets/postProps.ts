export default interface PostProps {
  id: number;
  user: string;
  avatar: string;
  message: string;
  comments: string | string[];
  likes: number;
  shares: number;
  destacados: boolean;
  bookmark: boolean;
  image?: string;
}
