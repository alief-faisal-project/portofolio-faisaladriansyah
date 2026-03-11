import "./globals.css";
import { Orbitron } from "next/font/google";
import HydrationFix from "@/components/HydrationFix";
import Cursor from "@/components/Cursor";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <Cursor />
        <HydrationFix />
        {children}
      </body>
    </html>
  );
}
