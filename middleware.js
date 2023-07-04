import { match } from '@formatjs/intl-localematcher'
import parser from 'accept-language-parser'
import { NextResponse } from 'next/server'

let locales = ['en', 'pt']

function getLocale(request) {
    const languageHeader = request.headers.get('accept-language')
    let languages = parser.parse(languageHeader)
    if (!languages.length || languages[0].code === '*') return locales[0]
    
    return match(languages.map(lang => lang.code), locales, locales[0])
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
        return NextResponse.redirect(new URL(`/${locale}`, request.url))
    }
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image))'
}