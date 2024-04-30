import { Outlet, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/posts')({
  component: Posts,
});

function Posts() {
  return <Outlet />;
}
