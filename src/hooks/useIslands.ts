import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";


export interface IslandData {
  code: string;
  title: string;
  tags: string[] | null;
}

interface FetchIslandsResponse {
  meta: { count: number };
  data: IslandData[];
}


const useIslands = () => {
  const [islands, setIslands] = useState<IslandData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchIslandsResponse>("/islands", {signal: controller.signal})
      .then((res) => {
        setIslands(res.data.data.slice(40, 50))
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
      });

    
    return () => controller.abort();
  }, []);

  return {islands, error, isLoading}
}

export default useIslands