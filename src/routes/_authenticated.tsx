import { useAuth } from '@/contexts/AuthProvider';
import { Link, Outlet, createFileRoute, redirect, useRouter } from '@tanstack/react-router';
import React from 'react';
export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth?.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          from: location.href,
        },
      });
    }
  },
  component: RootLayout,
});

function RootLayout() {
  const router = useRouter();
  const navigate = Route.useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      auth.logout();
      router.invalidate().finally(() => {
        navigate({ to: '/login' });
      });
    }
  };

  return (
    <div className='p-2 h-full'>
      <h1>Authenticated Route</h1>
      <p>This route's content is only visible to authenticated users.</p>
      <ul className='py-2 flex gap-2'>
        <li>
          <Link
            to='/'
            className="hover:underline data-[status='active']:font-semibold"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/posts'
            className="hover:underline data-[status='active']:font-semibold"
          >
            Posts
          </Link>
        </li>
        <li>
          <button
            type='button'
            className='hover:underline'
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
