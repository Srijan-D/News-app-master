import './globals.css'

import Header from "./Header";
import Providers from "./Providers";

//for tailwind css
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <Providers>

        <body className="bg-gray-100 dark:bg-zinc-900  transition-all duration-700">
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
