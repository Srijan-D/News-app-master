import './globals.css'

import Header from "./Header";
import Providers from "./Providers";
import { Analytics } from '@vercel/analytics/react';

//for tailwind css
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <Providers>
        <body className="bg-gray-100 dark:bg-zinc-900  transition-all duration-700">
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
