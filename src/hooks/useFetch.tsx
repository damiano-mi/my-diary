import { useEffect, useState } from "react";
import axios from "axios";
import { Post, User } from "../const/types";
import { urlPosts, urlUsers } from "../const/links";

export default function useFetch(url: string) {

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let isCurrent = true;
      try {
        const response = await axios.get(url);
        let data;
        if(url.includes(urlPosts))
          data = response.data as Post[];
        else if(url.includes(urlUsers))
          data = response.data as User[];
        else
          data = response.data as any[];

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
