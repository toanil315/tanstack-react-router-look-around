import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/')({
  component: Index,
});

function Index() {
  return <div className='p-2'>You are currently on the dashboard route.</div>;
}
