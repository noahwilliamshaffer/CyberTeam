import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sentinel Shield LLC | Veteran-Owned Cybersecurity Consulting",
    template: "%s | Sentinel Shield LLC"
  },
  description: "Veteran-owned cybersecurity consulting services including penetration testing, compliance audits, and security training. Military-trained professionals protecting your business with precision and dedication.",
  keywords: ["cybersecurity", "penetration testing", "security consulting", "compliance", "HIPAA", "PCI-DSS", "vulnerability assessment", "veteran-owned", "military"],
  authors: [{ name: "Sentinel Shield LLC Team" }],
  creator: "Sentinel Shield LLC",
  publisher: "Sentinel Shield LLC",
  openGraph: {
    title: "Sentinel Shield LLC | Veteran-Owned Cybersecurity Consulting",
    description: "Veteran-owned cybersecurity consulting services with military-trained professionals protecting businesses from digital threats.",
    url: "https://sentinelshield.vercel.app",
    siteName: "Sentinel Shield LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel Shield LLC | Veteran-Owned Cybersecurity Consulting",
    description: "Veteran-owned cybersecurity consulting services with military-trained professionals protecting businesses from digital threats.",
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