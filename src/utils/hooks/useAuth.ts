import {
  setUser,
  signInSuccess,
  signOutSuccess,
  useAppSelector,
  useAppDispatch, setUserInfo, setUserId, setNotificationCount
} from '@/store'
import appConfig from '@/configs/app.config'
import {REDIRECT_URL_KEY} from '@/constants/app.constant'
import {useNavigate} from 'react-router-dom'
import {SignInCredential, SignInResponse, SignInWithGoogleCredentials, SignUpCredential} from '@/@types/auth'
import {AuthService} from "@/services/auth/auth.service";
import useQuery from './useQuery'

type Status = 'success' | 'failed'

function useAuth() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {token, signedIn} = useAppSelector((state) => state.auth.session)
  const userId = useAppSelector(state => state.auth.userInfo.userId)
  const query = useQuery()


  const signIn = async (
    values: SignInCredential
  ): Promise<
    | {
    status: Status
    message: string
  }
    | undefined
  > => {
    try {
      const resp = await AuthService.signIn(values.email, values.password)

      dispatch(setUserId(resp.id))
      const {access_token, id, email, fullName, phoneNumber} = resp
      dispatch(signInSuccess({token: access_token, refreshToken: '', expireTime: 0}))
      // const userInfo = await AuthService.userinfo()
      // dispatch(
      //   setUserInfo({
      //     isTwoFaEnabled: resp.isTwoFactorEnabled,
      //     googleLogin: false,
      //     name: userInfo.name,
      //     walletAddress: userInfo.walletAddress,
      //     email: userInfo.email,
      //     role: userInfo.role,
      //     userId: userInfo.userId,
      //     language: userInfo.language,
      //     notificationCount: 0
      //   })
      // )
      dispatch(
        setUser(
          {
            fullName: fullName,
            email: email,
            role: [],
            phoneNumber: phoneNumber
          }
        )
      )
      const redirectUrl = query.get(REDIRECT_URL_KEY)
      navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
      return {
        status: 'success',
        message: ''
      }
    } catch (errors: any) {
      if (errors.response.data.message) {
        navigate('/two-factor', {state: values})
        return
      }
      return {
        status: 'failed',
        message: errors?.response?.data?.description || errors.toString()
      }
    }
  }

  const signInWithGoogle = async (
    values: SignInResponse
  ): Promise<
    | {
    status: Status
    message: string
  }
    | undefined
  > => {
    try {
      // const resp = await AuthService.signIn(values.userName, values.password)
      // const { accessToken } = values
      // dispatch(signInSuccess({ token: accessToken, refreshToken: values.refreshToken, expireTime: values.expireTime }))
      // const userInfo = await AuthService.userinfo()
      // dispatch(
      //   setUserInfo({
      //     googleLogin: true,
      //     name: userInfo.name,
      //     walletAddress: userInfo.walletAddress,
      //     email: userInfo.email,
      //     role: userInfo.role,
      //     userId: userInfo.userId,
      //     language: userInfo.language
      //   })
      // )
      // dispatch(
      //   setUser(
      //     values.user || {
      //       userName: userInfo.name,
      //       role: userInfo.role,
      //       email: userInfo.email
      //     }
      //   )
      // )
      // const redirectUrl = query.get(REDIRECT_URL_KEY)
      // navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
      // return {
      //   status: 'success',
      //   message: ''
      // }
    } catch (errors: any) {
      return {
        status: 'failed',
        message: errors?.response?.data?.description || errors.toString()
      }
    }
  }


  const signUp = async (values: SignUpCredential) => {
    // try {
    //   await AuthService.signUp(values)
    //   return {
    //     status: 'success',
    //     message: ''
    //   }
    //   // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    // } catch (errors: any) {
    //   return {
    //     status: 'failed',
    //     message: errors?.response?.data?.description || errors.toString()
    //   }
    // }
  }

  const handleSignOut = () => {
    dispatch(signOutSuccess())
    dispatch(setUserInfo({googleLogin: false, name: '', role: '', email: '', userId: userId}))
    dispatch(
      setUser({
        fullName: '',
        role: [],
        email: ''
      })
    )
    navigate(appConfig.unAuthenticatedEntryPath)
  }

  const signOut = async () => {
    // await apiSignOut()
    handleSignOut()
  }

  return {
    authenticated: token && signedIn,
    signIn,
    signUp,
    signOut,
    signInWithGoogle
  }
}

export default useAuth
