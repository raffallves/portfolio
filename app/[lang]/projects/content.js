import "server-only"

const content = {
    en: () => import('./_content/en.json').then((module) => module.default),
    pt: () => import('./_content/pt.json').then((module) => module.default)
}

export const getContent = async (locale) => content[locale]()