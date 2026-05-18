import { useState } from "react";

interface UseApi<T, P extends any[]> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  exec: (...args: P) => Promise<T | undefined>;
}

const useApi = <T, P extends any[]>(
  apiFunc: (...args: P) => Promise<T>,
): UseApi<T, P> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const exec = async (...args: P): Promise<T | undefined> => {
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
