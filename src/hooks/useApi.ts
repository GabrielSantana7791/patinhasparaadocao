import { useState } from "react";

interface UseApi<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  exec: (...args: any[]) => Promise<T | undefined>;
}

const useApi = <T>(apiFunc: (...args: any[]) => Promise<T>): UseApi<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const exec = async (...args: any[]): Promise<T | undefined> => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await apiFunc(...args);
      setData(result);
      return result;
    } catch (err: any) {
      setError(err);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, exec };
};

export default useApi;
