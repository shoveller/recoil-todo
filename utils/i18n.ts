import ICU, { IcuInstance } from 'i18next-icu'
import en from 'i18next-icu/locale-data/en'
import ko from 'i18next-icu/locale-data/ko'
import { NextComponentType, NextPageContext } from 'next'
import NextI18Next, { InitConfig } from 'next-i18next'
import path from 'path'

const use: IcuInstance[] = []
const icu = new ICU({})
icu.addLocaleData(ko)
icu.addLocaleData(en)
use.push(icu)

const config: InitConfig = {
  defaultLanguage: 'en',
  defaultNS: 'common',
  fallbackLng: 'en',
  keySeparator: '###',
  localePath: path.resolve('./public/locales'),
  otherLanguages: ['en', 'ko'],
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  use,
}

const NextI18NextInstance = new NextI18Next(config)

export const { appWithTranslation, withTranslation } = NextI18NextInstance

export default NextI18NextInstance

export const includeDefaultNamespaces = (namespaces: string[]) => {
  return ['common', ...namespaces]
}

export const { Trans } = NextI18NextInstance
export type I18nPage<P = any> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>
