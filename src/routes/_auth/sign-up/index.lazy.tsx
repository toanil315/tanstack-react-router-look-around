import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth/sign-up/')({
  component: SignUp,
});

function SignUp() {
  return <div className='p-2'>Sign Up</div>;
}
