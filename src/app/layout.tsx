import type { Metadata } from "next";

import "@/styles/global.scss";
import { ThemeProvider } from "@/providers/theme-providers";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
