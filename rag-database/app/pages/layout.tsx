import { logout } from "../actions";

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
