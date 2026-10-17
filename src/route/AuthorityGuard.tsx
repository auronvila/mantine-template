import { PropsWithChildren } from 'react';
import useAuthority from '@/utils/hooks/useAuthority';

type AuthorityGuardProps = PropsWithChildren<{
  userAuthority?: string[];
  authority?: string[];
}>;

const AuthorityGuard = (props: AuthorityGuardProps) => {
  const { userAuthority = [], authority = [], children } = props;

  const roleMatched = useAuthority(userAuthority, authority);

  return (
    <>
      {roleMatched ? (
        children
      ) : (
        <div role="alert">You do not have permission to access this page.</div>
      )}
    </>
  );
};

export default AuthorityGuard;
