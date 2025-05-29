import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CyberSecure Pro | Advanced Cybersecurity Consulting",
    template: "%s | CyberSecure Pro"
  },
  description: "Professional cybersecurity consulting services including penetration testing, web app security, OSINT assessments, security audits, and compliance assistance. Protect your business with expert cybersecurity solutions.",
  keywords: ["cybersecurity", "penetration testing", "security audit", "OWASP", "compliance", "HIPAA", "PCI-DSS", "vulnerability assessment"],
  authors: [{ name: "CyberSecure Pro Team" }],
  creator: "CyberSecure Pro",
  publisher: "CyberSecure Pro",
  openGraph: {
    title: "CyberSecure Pro | Advanced Cybersecurity Consulting",
    description: "Professional cybersecurity consulting services to protect your business from digital threats.",
    url: "https://cybersecure-pro.vercel.app",
    siteName: "CyberSecure Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberSecure Pro | Advanced Cybersecurity Consulting",
    description: "Professional cybersecurity consulting services to protect your business from digital threats.",
    creator: "@cybersecurepro",
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