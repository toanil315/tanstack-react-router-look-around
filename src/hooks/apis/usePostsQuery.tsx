import { axiosClient } from '@/utils';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getPostsQueryOptions = (page?: number, limit?: number) => {
  console.log('page', page);
  console.log('limit', limit);

  return queryOptions({
    queryKey: ['projects'],
    queryFn: () => axiosClient.get('/projects'),
    staleTime: 0,
  });
};

export const usePostsQuery = () => {
  const { data, ...restResult } = useQuery(getPostsQueryOptions());

  return {
    posts: (data as any)?.results || [],
    ...restResult,
  };
};
