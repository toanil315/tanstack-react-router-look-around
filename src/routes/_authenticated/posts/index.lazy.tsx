import { usePostsQuery } from '@/hooks/apis/usePostsQuery';
import { Link, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/posts/')({
  component: Posts,
});

function Posts() {
  const { posts } = usePostsQuery();

  return (
    <div className='p-2'>
      {posts &&
        posts.map((post: any) => (
          <div
            key={post.id}
            className='p-2 border-b border-gray-500'
          >
            <Link
              to={`/posts/$id`}
              params={{ id: post.id }}
              className='hover:underline'
            >
              <h2 className='text-lg font-semibold'>{post.project_name}</h2>
            </Link>
            <p>{post.project_domain}</p>
          </div>
        ))}
    </div>
  );
}
