import 'server-only'


const dictionaries = {
  en: () => import('./dictionaris/en.json').then((module) => module.default),
  bn: () => import('./dictionaris/bn.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()