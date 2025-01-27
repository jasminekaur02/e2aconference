import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "E2ACON | NITJ",
    description: "E2ACON 2025, an International Conference on Electrical, Electronics, and Automation, serves as a global platform for researchers, engineers, educators, and industry professionals to exchange ideas and innovations. With the theme “Sustainable Development: The Foundation of a Viksit Bharat,” the conference emphasizes advanced technologies' role in driving sustainable growth and supporting India's vision of becoming a developed nation. Covering topics like renewable energy, smart grids, IoT, automation, and advanced control, E2ACON fosters collaboration and showcases cutting-edge developments. Co-hosted by the School of Electrical and Electronic Engineering, Newcastle University in Singapore (NUiS), this event is a step toward a sustainable, connected, and automated future.",
    icons: {
    icon: "/favicon.ico", // Path to favicon in /public
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning >
            <body className={inter.className}>{children}</body>
        </html>
    );
}
