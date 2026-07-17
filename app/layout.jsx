import { getBaseMetadata } from "./lib/seo";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { PageTransition } from "./components/animation/PageTransition";

export const metadata = getBaseMetadata();

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-black text-white">
      <body className="min-h-full bg-black text-white antialiased">
        <Navbar />
        <div className="pt-[88px]">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
