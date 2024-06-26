import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {

            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
            const isOnLogin = nextUrl.pathname === '/login'
            const isOnVerification = nextUrl.pathname === '/verification'


            if (nextUrl.pathname === '/dashboard') {
                return Response.redirect(new URL('/dashboard/novels', nextUrl))
            }

            if (isOnDashboard) {
                if (isLoggedIn) return true
                return false
            } else if (isLoggedIn && isOnLogin) {
                return Response.redirect(new URL('/dashboard', nextUrl))
            }
            return true
        }
    },
    providers: []
} satisfies NextAuthConfig