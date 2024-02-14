import { useEffect, useState } from "react";
import axios from "axios";
import { User as Type } from "./types";

export default function useFetch(url: string) {

  const [data, setData] = useState<Type[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let isCurrent = true;
      try {
        const response = await axios.get(url);
        const data = response.data as Type[];
        if (isCurrent)
          setData(data);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
      return () => { isCurrent = false; }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
}
