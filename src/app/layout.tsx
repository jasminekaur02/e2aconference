import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E2A 2025 | NITJ",
  description: "International Conference on Electrical, Electronics, and Automation (E2A) serves as a global hub where the brightest minds converge to explore, collaborate, and share their ground-breaking research and innovations. In today's rapidly evolving technological landscape, the domains of electrical engineering, electronics, and automation are integral to shaping our future. E2A provides a vital platform for researchers, scientists, engineers, educators, and industry experts from diverse backgrounds and cultures to come together, fostering a rich exchange of ideas and knowledge. As we navigate an era of unprecedented technological advancement, E2A strives to accelerate progress by facilitating meaningful conversations, driving innovation, and charting the course for a future powered by cutting-edge electrical, electronics, and automation technologies. Join us at E2A to be a part of this transformative journey, where together, we illuminate the path toward a smarter, more connected, and automated world. Your contributions and insights are integral to shaping the future at E2A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
