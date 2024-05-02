import { queryClient } from '@/App';
import { getPostsQueryOptions } from '@/hooks/apis/usePostsQuery';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

export const Route = createFileRoute('/_authenticated/posts/')({
  validateSearch: z.object({
    page: z.number().optional().catch(1),
    limit: z.number().optional().catch(10),
  }),
  loaderDeps: ({ search: { page, limit } }) => ({
    page,
    limit,
  }),
  loader: ({ deps: { page, limit } }) =>
    queryClient.ensureQueryData(getPostsQueryOptions(page, limit)),
  // In this place we can use beforeLoad to check if the user is authorized to access this page.
});
