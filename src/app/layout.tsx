import type { Metadata } from "next";

import { ThemeProvider } from "@/providers/theme-providers";
import { Toaster } from "@/components/ui/sonner";

import Header from "@/components/header/header";

import "@/styles/global.scss";
import styles from "@/styles/index.module.scss";

export const metadata: Metadata = {
  title: "Sumr",
  description: "Sumr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // 기본 테마를 dark로 설정
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className={styles["index"]}>
            <div className={styles["container"]}>{children}</div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
