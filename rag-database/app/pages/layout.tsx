// layout.tsx (or similar layout file)

import { Geist, Geist_Mono } from "next/font/google";
import { logout } from "../actions";

// Load the Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      {children}

      {/* Optionally add your logout button here */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center flex justify-end">
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
