import { Link, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/posts/$id/')({
  component: PostDetail,
});

function PostDetail() {
  const { id } = Route.useParams();
  return (
    <Link
      to='/posts/$id/edit'
      params={{ id }}
    >
      Post {id}
    </Link>
  );
}
