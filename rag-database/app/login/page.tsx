'use client'
import { login } from '../actions'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const searchParams = useSearchParams();
    const router = useRouter(); 
    const [errorMessage, setErrorMessage] = useState<string | null>(searchParams.get('error') ? "Please validate your email" : null);

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
  
      // Get form data
      const formData = new FormData(event.target as HTMLFormElement);
  
      // Call the login function
      const response = await login(formData);
  
      if (response.errorMessage) {
        setErrorMessage(response.errorMessage);
      } else {
        setErrorMessage(null);
      }
    };
  
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="max-w-sm mx-auto p-6 border border-gray-300 rounded-lg bg-white mt-24">
          <button 
              onClick={() => router.back()} 
              className="absolute top-2 left-4 p-2 text-gray-600 hover:underline cursor-pointer"
          >
              Back
          </button>
          <h2 className="text-center text-2xl font-semibold mb-6">Login Page</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
    
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
    
            {errorMessage && (
              <div className="text-red-500 mb-2 text-center">
                {errorMessage}
              </div>
            )}
    
            <div className="flex space-x-4 justify-between">
              <button
                type="submit"
                className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
              >
                Log in
              </button>
            </div>
          </form>
          <button onClick={() => redirect('/signup')} className="flex justify-center items-center cursor-pointer hover:underline w-full py-1 ">
            Sign up
          </button>
        </div>
      </Suspense>
    );
  }