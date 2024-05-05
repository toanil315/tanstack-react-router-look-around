import { SUBJECTS_ENUM } from '@/constants';

export interface Blog {
  kind: SUBJECTS_ENUM.BLOG;
  id: number;
  project_name: string;
  project_domain: string;
  userId: number;
}

export interface User {
  kind: SUBJECTS_ENUM.USER;
  id: number;
}
