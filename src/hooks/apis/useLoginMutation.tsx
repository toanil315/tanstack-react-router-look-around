import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants';
import { axiosClient } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

export const useLoginMutation = () => {
  const { mutate, ...restMutation } = useMutation({
    mutationFn: () =>
      axiosClient.post('/auth/login', {
        email: 'frontend.exam@digitalfortress.dev',
        password: 'FrontendExam',
      }),
  });

  return {
    login: async () => {
      return mutate(undefined, {
        onSuccess(data: AxiosResponse['data']) {
          const { access_token, refresh_token } = data;
          localStorage.setItem(ACCESS_TOKEN, access_token);
          localStorage.setItem(REFRESH_TOKEN, refresh_token);
        },
      });
    },
    ...restMutation,
  };
};
