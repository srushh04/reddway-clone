import "./globals.css";
import { ReactNode } from "react";


export const metadata = {
  title: "Reddway Clone",
  description: "Website Builder Clone",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        
        {children}
      </body>
    </html>
  );
}
