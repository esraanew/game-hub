import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";


interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endPoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
  const controller = new AbortController();
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endPoint, { signal: controller.signal ,...requestConfig})
      .then((res) => setData(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // return () => controller.abort();
  }, deps?deps:[]);
  return { data, error, isLoading };
};

export default useData;
