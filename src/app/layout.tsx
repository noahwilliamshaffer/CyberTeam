import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sentinel Shield LLC | Advanced Cybersecurity Consulting",
    template: "%s | Sentinel Shield LLC"
  },
  description: "Expert cybersecurity consulting services including penetration testing, compliance audits, and security training. Protect your business with professional cybersecurity solutions.",
  keywords: ["cybersecurity", "penetration testing", "security consulting", "compliance", "HIPAA", "PCI-DSS", "vulnerability assessment"],
  authors: [{ name: "Sentinel Shield LLC Team" }],
  creator: "Sentinel Shield LLC",
  publisher: "Sentinel Shield LLC",
  openGraph: {
    title: "Sentinel Shield LLC | Advanced Cybersecurity Consulting",
    description: "Expert cybersecurity consulting services to protect your business from digital threats.",
    url: "https://sentinelshield.vercel.app",
    siteName: "Sentinel Shield LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel Shield LLC | Advanced Cybersecurity Consulting",
    description: "Expert cybersecurity consulting services to protect your business from digital threats.",
    creator: "@sentinelshield",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 