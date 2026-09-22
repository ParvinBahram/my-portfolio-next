import Navbar from '@/components/Navbar'
import "./globals.css";
import localfont from 'next/font/local'


const vazirmatn = localfont({
  src: [
    { path: './fonts/Vazirmatn-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Vazirmatn-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Vazirmatn-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-vazirmatn',
})


export const metadata = {
  title: "سایت شخصی رزومه",
  description: " معرفی خودم و مهارتها و کارهایی که انجام دادم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa"  className={`${vazirmatn.variable} scroll-smooth`}>
      <body className="relative min-h-screen flex flex-col" dir='rtl'>
        <Navbar />
        <div className="flex-1 container ">{children}</div>
      </body>
    </html>
  );
}
