import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'

let locales = ['en', 'pt']

function getLocale(request) {
    let languages = new Negotiator(request).languages()
    if (languages[0] === '*') languages[0] = 'en'
    let defaultLocale = 'en'
    return match(languages, locales, defaultLocale)
}

export function middleware(request) {
    // Check if there is any supported locale in pathname
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `${locale}`
    )
    
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        // e.g. incoming request is /
        // The new URL is now /en
        console.log('redirect')
        return NextResponse.redirect(new URL(`/${locale}`, request.url))
    }
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image))'
}