import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import AppShell from "@/components/layouts/AppShell";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const shouldNoIndex = pathname.startsWith("/admin") || pathname === "/404";

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {shouldNoIndex && (
          <meta name="robots" content="noindex,nofollow" />
        )}
      </Head>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
