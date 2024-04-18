import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export { default } from "next-auth/middleware";

// applies next-auth only to matching routes
export const config = { matcher: ["/settings/profile"] };

export async function middleware(request: NextRequest) {
    const cookieStore = cookies ()
    const homeUrl = '/auth/signin'
    const token = cookieStore.get("jwt")?.value;
    const path = request.nextUrl.pathname;


    if (path == '/'){
      if (!token)
        return NextResponse.redirect(new URL('/auth/signin', request.url));
          try {
          const response = await fetch('http://localhost:3000/api/reports', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (token.length == 0 || response.status === 401){
            return NextResponse.redirect(new URL(homeUrl, request.url))
          }
         }catch (err){
            console.log ('err: ', err)
         }
    }
    if (path == '/auth/signin' || path == '/auth/signup'){

        if (token)
          return NextResponse.redirect(new URL('/', request.url))
   
    }
}