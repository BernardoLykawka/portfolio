import api from "@/services/api";
import { Project } from "@/types";
import { useEffect, useState } from "react";

export default function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const response = await api.get('/users/BernardoLykawka/repos', {
          params: {
            per_page: 100,
            sort: 'created',
          },
        });
        console.log('fetchProjects response', response);
        const data = Array.isArray(response.data) ? response.data : [];
        if (mounted) setProjects(data as Project[]);
      } catch (error) {
        console.error('fetchProjects error', error);
        const data: Project[] = [];
        if (mounted) setProjects(data);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return projects;
}