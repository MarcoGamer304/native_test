export default interface PostProps {
  id: number;
  user: string;
  message: string;
  avatar: string;
  comments: string[] | string;
  likes: number;
  shares: number;
  destacados: boolean;
  bookmark: boolean;
}
