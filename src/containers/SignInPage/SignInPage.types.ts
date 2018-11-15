import { SignInProps } from 'decentraland-ui'

export type SignInPageProps = SignInProps & {
  hasTranslations?: boolean
}

export type SignInState = {
  hasError: boolean
}

export type MapStateProps = Pick<
  SignInPageProps,
  'isConnecting' | 'isConnected' | 'hasError' | 'hasTranslations'
>

export type MapDispatchProps = Pick<SignInPageProps, 'onConnect'>
