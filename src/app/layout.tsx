
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar"; 
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prince Portfolio",
  description: "The Best UI/UX designer out there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider defaultTheme="light" attribute="class">
          <NavBar /> {/* Render the NavBar component */}
          {children}
          <Footer /> {/* Render the Footer component */}
        </ThemeProvider>
      </body>
    </html>
  );
}