import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../components/theme-provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focus Sound",
  description: "Focus sound app to accompany your focus time so you don't feel alone!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
