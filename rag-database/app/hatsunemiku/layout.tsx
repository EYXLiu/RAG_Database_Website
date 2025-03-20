
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      {children}

      <div className="fixed bottom-0 left-0 w-full bg-gray-100 text-white p-4 text-center flex justify-end">  
        <a href="https://www.linkedin.com/in/evanyxliu/" className="p-2 mt-[-3px]">
          <img src='/linkedin.png' alt='Linkedin Link' width='50' height='50'/>
        </a>
        <a href="https://github.com/EYXLiu" className="p-2">
          <img src='/github.png' alt='Github Link' width='40' height='40'/>
        </a>
      </div>
    </div>
  );
}
