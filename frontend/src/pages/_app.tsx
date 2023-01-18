import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Slab, Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/auth-context";

const inter = Inter({ subsets: ["latin"] });
const roboto_slab = Roboto_Slab({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
          --roboto-slab-font: ${roboto_slab.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" enableSystem={false}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
