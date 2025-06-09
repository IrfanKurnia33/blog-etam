import { Sora, IBM_Plex_Serif, Azeret_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Erratic Thoughts and More",
  description: "A personal journal of Irfan Kurnia",
  icons: {
    icon: "/blog-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${ibmPlexSerif.variable} ${azeretMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
