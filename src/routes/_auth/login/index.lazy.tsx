import { useAuth } from '@/contexts/AuthProvider';
import { createLazyFileRoute, useRouter, useRouterState } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth/login/')({
  component: LoginComponent,
});

const fallback = '/' as const;

function LoginComponent() {
  const auth = useAuth();
  const router = useRouter();
  const isLoading = useRouterState({ select: (s) => s.isLoading });
  const navigate = Route.useNavigate();

  const search = Route.useSearch();

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = new FormData(evt.currentTarget);
    const fieldValue = data.get('username');

    if (!fieldValue) return;

    const username = fieldValue.toString();

    auth.login(username);

    router.invalidate().finally(() => {
      navigate({ to: search.from || fallback });
    });
  };

  return (
    <div className='p-2 grid gap-2 place-items-center'>
      <h3 className='text-xl'>Login page</h3>
      {search.from ? (
        <p className='text-red-500'>You need to login to access this page.</p>
      ) : (
        <p>Login to see all the cool content in here.</p>
      )}
      <form
        className='mt-4 max-w-lg'
        onSubmit={onFormSubmit}
      >
        <fieldset
          disabled={isLoading}
          className='w-full grid gap-2'
        >
          <div className='grid gap-2 items-center min-w-[300px]'>
            <label
              htmlFor='username-input'
              className='text-sm font-medium'
            >
              Username
            </label>
            <input
              id='username-input'
              name='username'
              placeholder='Enter your name'
              type='text'
              className='border border-gray-300 rounded-md p-2 w-full'
              required
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded-md w-full'
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
