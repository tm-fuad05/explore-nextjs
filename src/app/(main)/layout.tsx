import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "@/app/global.css";

const hind_shiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: {
    default: "Next.Js",
    template: "%s | Codevolution",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hind_shiliguri.variable}>
        {/* Navbar */}
        <nav className="bg-blue-700 text-center w-full">Navbar</nav>
        <main>{children}</main>
        {/* Footer */}
      </body>
    </html>
  );
}
