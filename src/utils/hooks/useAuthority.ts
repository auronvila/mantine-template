import { useMemo } from 'react';

function useAuthority(userAuthority: string[] = [], authority: string[] = [], emptyCheck = false) {
  const roleMatched = useMemo(() => {
    return authority.some((role) => userAuthority.includes(role));
  }, [authority, userAuthority]);

  if (authority.length === 0) {
    return !emptyCheck;
  }

  return roleMatched;
}

export default useAuthority;
