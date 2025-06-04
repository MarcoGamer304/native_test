import { TPost } from "../types/TPost";

export interface IPost{
    create: (data: FormData) => Promise<TPost>
}