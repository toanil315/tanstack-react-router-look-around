import { AuthContext } from '@/contexts/AuthProvider';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

interface MyRouterContext {
  auth: AuthContext | null;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools
        position='bottom-right'
        initialIsOpen={false}
      />
    </>
  ),
  notFoundComponent: () => (
    <div className='w-screen h-screen flex items-center justify-center font-bold text-3xl'>
      404 NOT FOUND
    </div>
  ),
});
