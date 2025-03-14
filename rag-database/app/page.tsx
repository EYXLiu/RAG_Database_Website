import { createClient } from '@/utils/supabase/server'
import { redirectLogin, logout } from './actions';

export default async function Home() {

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  const user = !(error || !data?.user)



  return (
    <div>
      <h1>{user ? "hello" : "bye"}</h1>
      {<div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center flex justify-end">
        {user ? <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
        >
          Logout
        </button> : <button
          onClick={redirectLogin}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
        >
          Login
        </button>}
      </div>}
    </div>
  );
}
