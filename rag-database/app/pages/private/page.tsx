import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import GetVal from './client/sentence';

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <GetVal m="hello"/>
    </div>
  )
}