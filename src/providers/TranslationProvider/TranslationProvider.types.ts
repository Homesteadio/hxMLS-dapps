import { Locale } from 'decentraland-ui'

import { fetchTranslationsRequest } from '../../modules/translation/actions'
import { TranslationKeys } from '../../modules/translation/types'

export interface Props {
  locale?: Locale
  locales: Locale[]
  translations?: TranslationKeys
  children?: React.ReactNode
  onFetchTranslations: typeof fetchTranslationsRequest
}

export type MapStateProps = Pick<Props, 'locale' | 'translations'>
export type MapDispatchProps = Pick<Props, 'onFetchTranslations'>
