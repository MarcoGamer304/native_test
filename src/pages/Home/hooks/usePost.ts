import { useState, useEffect } from "react";
import { TPost } from "../models/types/TPost";
import { PostRepository } from "../repositories/postRepository";
import { GetAllPostUseCase } from "../models/useCases/getAllPostUseCase";
import { createAddapterAllPost } from "../adapters/createAddapterPost";

const usePost = (id: number) => {
  const [allPost, setAllPost] = useState<
    TPost[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postRepository = PostRepository.getInstance();
  const getAllNotificationsUseCase = new GetAllPostUseCase(
    postRepository
  );

  const fetchAllPost = async () => {
    try {
      setLoading(true);
      const result = await getAllNotificationsUseCase.execute(id);
      const forrmatted = createAddapterAllPost(result);
      setAllPost(forrmatted);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchAllPost();
  }, [id]);

  return { allPost, loading, error, refresh: fetchAllPost };
};

export default usePost;