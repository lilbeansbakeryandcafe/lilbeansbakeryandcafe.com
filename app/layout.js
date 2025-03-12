import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lil Beans Bakery and Cafe",
  description: "Navy Bean Pie, Cookies, Pastries, Coffee | Made with Love.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Lil Beans Bakery and Cafe",
    description: "Navy Bean Pie, Cookies, Pastries, Coffee | Made with Love.",
    type: "website",
    siteName: "Lil Beans Bakery and Cafe",
    images: [
      {
        url: "http://www.lilbeansbakeryandcafe.com/resources/lilbeansfinalwebsize_color.png",
        width: 512,
        height: 512,
        alt: "Lil Beans Bakery and Cafe storefront",
      },
      {
        url: "http://www.lilbeansbakeryandcafe.com/resources/lilbeansfinalwebsize_color.png",
        width: 512,
        height: 512,
        alt: "Our signature Navy Bean Pie",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lil Beans Bakery and Cafe",
    description: "Navy Bean Pie, Cookies, Pastries, Coffee | Made with Love.",
    images: [
      {
        url: "http://www.lilbeansbakeryandcafe.com/resources/lilbeansfinalwebsize_color.png",
        alt: "Lil Beans Bakery and Cafe storefront",
      }
    ],
  },
  alternates: {
    canonical: "https://lilbeansbakery.com",
  },
  keywords: ["bakery", "cafe", "navy bean pie", "cookies", "coffee", "pastries", "artisan bakery"],
  authors: [{ name: "Lil Beans Bakery and Cafe" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
