import {
  setUser,
  signInSuccess,
  signOutSuccess,
  useAppSelector,
  useAppDispatch,
  setUserId,
} from '@/store';
import appConfig from '@/configs/app.config';
import { REDIRECT_URL_KEY } from '@/constants/app.constant';
import { useNavigate } from 'react-router-dom';
import { SignInCredential } from '@/@types/auth';
import { AuthService } from '@/services/auth/auth.service';
import useQuery from './useQuery';
import { useEffect } from 'react';

type Status = 'success' | 'failed';

function useAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token, signedIn, expireTime } = useAppSelector((state) => state.auth.session);
  const query = useQuery();

  useEffect(() => {
    if (!signedIn || expireTime <= 0) return;
    let timeout: number;
    const checkExpiry = () => {
      const remaining = expireTime - Date.now();
      if (remaining <= 0) {
        dispatch(signOutSuccess());
      } else {
        timeout = window.setTimeout(checkExpiry, Math.min(remaining, 2147483647));
      }
    };
    checkExpiry();
    return () => window.clearTimeout(timeout);
  }, [dispatch, signedIn, expireTime]);

  const signIn = async (
    values: SignInCredential
  ): Promise<
    | {
        status: Status;
        message: string;
      }
    | undefined
  > => {
    try {
      const resp = await AuthService.signIn(values.email, values.password);
      dispatch(setUserId(resp.id));
      const { access_token, email, fullName, phoneNumber } = resp;
      dispatch(
        signInSuccess({
          token: access_token,
          refreshToken: '',
          expireTime: resp.expires_in ? Date.now() + resp.expires_in * 1000 : 0,
        })
      );
      dispatch(
        setUser({
          fullName: fullName,
          email: email,
          role: resp.authority,
          phoneNumber: phoneNumber,
        })
      );
      const redirectUrl = query.get(REDIRECT_URL_KEY);
      navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath);
      return {
        status: 'success',
        message: '',
      };
    } catch (errors: any) {
      return {
        status: 'failed',
        message:
          errors?.response?.data?.message ||
          errors?.response?.data?.description ||
          'Unable to sign in. Please try again.',
      };
    }
  };

  const handleSignOut = () => {
    dispatch(signOutSuccess());
    navigate(appConfig.unAuthenticatedEntryPath);
  };

  const signOut = async () => {
    handleSignOut();
  };

  return {
    authenticated: Boolean(token && signedIn && (expireTime <= 0 || expireTime > Date.now())),
    signIn,
    signOut,
  };
}

export default useAuth;
