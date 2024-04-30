// import axios, { AxiosInstance, AxiosResponse } from 'axios';
// import { REFRESH_TOKEN, ACCESS_TOKEN, ROUTES } from '@/constants';

// let refreshTokenHandler: Promise<AxiosResponse<any, any>> | undefined = undefined;

// export const getNewAccessToken = () => {
//   const currentRefreshToken = localStorage.getItem(REFRESH_TOKEN) as string;
//   return axios.post(`${import.meta.env.VITE_API_URL}/refresh-token`, {
//     refreshToken: currentRefreshToken,
//   });
// };

// export const setTokens = ({
//   accessToken,
//   refreshToken,
// }: {
//   accessToken: string;
//   refreshToken: string;
// }) => {
//   localStorage.setItem(ACCESS_TOKEN, accessToken);
//   localStorage.setItem(REFRESH_TOKEN, refreshToken);
// };

// export const clearTokens = () => {
//   localStorage.removeItem(ACCESS_TOKEN);
//   localStorage.removeItem(REFRESH_TOKEN);
// };

// export const handleRefreshToken = async (originalConfig: any, axiosInstance: AxiosInstance) => {
//   const refreshToken = localStorage.getItem(REFRESH_TOKEN);
//   if (refreshToken) {
//     localStorage.removeItem(ACCESS_TOKEN);
//     try {
//       if (!refreshTokenHandler) {
//         refreshTokenHandler = getNewAccessToken();
//       }
//       const result = await refreshTokenHandler;

//       const tokens = result
//         ? {
//             accessToken: result.data.data.token,
//             refreshToken: result.data.data.refreshToken,
//           }
//         : undefined;
//       if (tokens) {
//         setTokens(tokens);
//         return axiosInstance(originalConfig);
//       }
//     } catch (error) {
//       window.location.href = ROUTES.LOGIN;
//     } finally {
//       refreshTokenHandler = undefined;
//     }
//   }
// };
