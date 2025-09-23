import type { Metadata } from "next";
import "./globals.css";
import { MessageProvider } from "./context/context";
import TawkChat from "./TawkChat";

export const metadata: Metadata = {
  title: 'FlareNetwork',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >
                <MessageProvider>
          {children}
          <TawkChat/>
        </MessageProvider>
      </body>
    </html>
  );
}
