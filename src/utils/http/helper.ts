import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { REFRESH_TOKEN, ACCESS_TOKEN } from '@/constants';

let refreshTokenHandler: Promise<AxiosResponse<any, any>> | undefined = undefined;

export const getNewAccessToken = () => {
  const currentRefreshToken = localStorage.getItem(REFRESH_TOKEN) as string;
  return axios.get(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, {
    headers: {
      Authorization: `Bearer ${currentRefreshToken}`,
    },
  });
};

export const setTokens = ({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
};

export const clearTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};

export const handleRefreshToken = async (originalConfig: any, axiosInstance: AxiosInstance) => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  if (refreshToken) {
    localStorage.removeItem(ACCESS_TOKEN);
    try {
      if (!refreshTokenHandler) {
        refreshTokenHandler = getNewAccessToken();
      }
      const result = await refreshTokenHandler;

      const tokens = result
        ? {
            accessToken: result.data.access_token,
            refreshToken: result.data.refresh_token,
          }
        : undefined;
      if (tokens) {
        setTokens(tokens);
        return axiosInstance(originalConfig);
      }
    } catch (error) {
      localStorage.removeItem(REFRESH_TOKEN);
      window.location.href = '/login';
    } finally {
      refreshTokenHandler = undefined;
    }
  }
};
