'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createServerClient } from '@/utils/custom/instance'

export async function login(formData: FormData) {
  const instance = createServerClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  try {
    await instance.login(data.email, data.password);
  } catch (error) {
    return { errorMessage: 'Failed to log in' };
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const instance = createServerClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs 

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  try {
    await instance.signup(data.email, data.password);
  } catch (error) {
    return { errorMessage: 'Email already in use' };
  }

  revalidatePath('/', 'layout');
  redirect('/login?error=validation');
}

export async function logout() {
    const instance = await createServerClient()
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
  
    try {
      await instance.logout();
    } catch (error) {
      redirect('/hatsunemiku')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
}

export async function redirectLogin() {
  redirect('/login');
}