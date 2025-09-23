import type { Metadata } from "next";
import "./globals.css";
import { MessageProvider } from "./context/context";
import TawkChat from "./TawkChat";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        defer
      ></script>
      <body>
        <MessageProvider>
          {children}
          <TawkChat />
        </MessageProvider>
      </body>
    </html>
  );
}
