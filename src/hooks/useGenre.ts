import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";


export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const useGenre = () => {
  const controller = new AbortController();
  const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => setGenre(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenre;
