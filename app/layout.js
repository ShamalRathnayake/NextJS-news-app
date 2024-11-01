import localFont from "next/font/local";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { AuthProvider } from "./components/Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import { ArticlesProvider } from "./components/Context/NewsContext";

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
  title: "News App",
  description: "News App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
        <AuthProvider>
          <ArticlesProvider>{children}</ArticlesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
