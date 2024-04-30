import { axiosClient } from '@/utils';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getPostsQueryOptions = (page?: number, limit?: number) => {
  console.log('page', page);
  console.log('limit', limit);

  return queryOptions({
    queryKey: ['posts'],
    queryFn: () => axiosClient.get('/posts'),
  });
};

export const usePostsQuery = () => {
  const { data, ...restResult } = useQuery(getPostsQueryOptions());
  return {
    posts: data?.data || [],
    ...restResult,
  };
};
