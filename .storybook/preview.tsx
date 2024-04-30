import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import theme from '../src/styles/theme';
import { ConfigProvider } from 'antd';

import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';
import React, { Suspense } from 'react';
import NotificationProvider from '../src/contexts/NotificationContext';

import '../src/index.css';

const withContext = (Story: any) => {
  return (
    // This catches the suspense from components not yet ready (still loading translations)
    // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <NotificationProvider>{Story()}</NotificationProvider>
      </I18nextProvider>
    </Suspense>
  );
};

const convertToPx = (value: string) => Number(value.replace('px', ''));

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: theme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
    withThemeFromJSXProvider({
      themes: {
        light: {
          token: {
            colorPrimary: theme.colors.primary_6,
            colorError: theme.colors.red_6,
            fontSize: convertToPx(theme.fontSizes.body),
            borderRadius: convertToPx(theme.radii.medium),
          },
        },
      },
      defaultTheme: 'light',
      Provider: ConfigProvider,
    }),
    withContext,
  ],
};

export default preview;
