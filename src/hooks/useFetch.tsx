import { useEffect, useState } from "react";
import request from "../services/APIRequests";

export default function useFetch<T>(url: string) {

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  
  const fetchData = async () => {
    setIsLoading(true);
    let isCurrent = true;
    try {
      const response = await request("get", url, "");
      const data = response.data as T[];

      if (isCurrent)
        setData(data);

    } catch (e: any) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
    return () => { isCurrent = false; }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error, fetchData };
}
