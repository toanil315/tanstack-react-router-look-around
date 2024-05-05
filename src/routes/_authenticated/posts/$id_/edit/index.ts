import { ACTIONS_ENUM, SUBJECTS_ENUM } from '@/constants';
import { Blog } from '@/interfaces';
import { subject } from '@casl/ability';
import { createFileRoute, notFound } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/posts/$id/edit/')({
  beforeLoad: ({ context }) => {
    const fakeBlog: Blog = {
      kind: SUBJECTS_ENUM.BLOG,
      userId: 1,
      id: 2,
      project_name: 'test',
      project_domain: 'test',
    };
    if (
      !context.auth?.checkPermissions(ACTIONS_ENUM.UPDATE, subject(SUBJECTS_ENUM.BLOG, fakeBlog))
    ) {
      throw notFound();
    }
  },
});
