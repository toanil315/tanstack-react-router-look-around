import { Outlet, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/posts/$id')({
  component: PostDetail,
});

function PostDetail() {
  return <Outlet />;
}
