import localFont from "next/font/local";
import "./globals.css";

// Load your custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Anas Khan - Portfolio",
  description: "This is the portfolio of Anas Khan, showcasing my projects and skills.",
  icons: {
    icon: "/favicon.png", 
  },
  openGraph: {
    title: "Anas Khan - Portfolio",
    description: "Explore my projects and skills.",
    url: "https://www.anaskhan.ca",
    images: [
      {
        url: "/png/home.png", 
        width: 800,
        height: 600,
        alt: "Anas Khan Portfolio Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Khan - Portfolio",
    description: "Explore my projects and skills.",
    images: ["/png/home.png"], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
