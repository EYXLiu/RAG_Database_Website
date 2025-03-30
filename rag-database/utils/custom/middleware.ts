import { createServerClient } from './instance';
import { NextRequest, NextResponse } from 'next/server'

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request,
    })

    const client = createServerClient();

    const user = client.getUser(); 
    /*
    if (
        !user &&
        request.nextUrl.pathname !== '/' && 
        !request.nextUrl.pathname.startsWith('/login') &&
        !request.nextUrl.pathname.startsWith('/auth') && 
        !request.nextUrl.pathname.startsWith('/signup') && 
        !request.nextUrl.pathname.startsWith('/forgetPassword') &&
        !request.nextUrl.pathname.startsWith('/hatsunemiku') 
    ) {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }
    */
    
    if (
        !request.nextUrl.pathname.startsWith('/hatsunemiku')
    ) {
        const url = request.nextUrl.clone()
        url.pathname = '/hatsunemiku'
        return NextResponse.redirect(url)
    };
    

    return response;

}