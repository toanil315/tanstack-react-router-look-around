import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';
import { z } from 'zod';

const fallback = '/';

export const Route = createFileRoute('/_auth')({
  validateSearch: z.object({
    from: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth?.isAuthenticated) {
      throw redirect({ to: search.from || fallback });
    }
  },
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className='p-6 bg-blue-200 rounded-md h-screen w-screen'>
      Auth Layout
      <Outlet />
    </div>
  );
}
