import Head from "next/head";
import {
  MantineProvider,
  Global,
  ColorSchemeProvider,
  ColorSchema,
} from "@mantine/core";

import { useHotkeys, useLocalStorage } from "@mantine/hooks";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => {
        return {
          "*::-webkit-scrollbar-track": {
            WebkitBorderRadius: "10px",
            backgroundColor: "#ebebeb",
            borderRadius: "10px",
          },

          "*::-webkit-scrollbar": {
            width: "10px",
          },

          "*::-webkit-scrollbar-thumb": {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
            WebkitBorderRadius: "10px",
            borderRadius: "10px",
          },
        };
      }}
    />
  );
}

export default function App(props) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "henil-site-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) => {
    return setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  useHotkeys([
    [
      "mod+J",
      () => {
        toggleColorScheme();
      },
    ],
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Henil Malaviya</title>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width'
          />
        </Head>

        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <GlobalStyles />
            <Component {...pageProps} />
          </MantineProvider>
        </ColorSchemeProvider>
      </QueryClientProvider>
    </>
  );
}
