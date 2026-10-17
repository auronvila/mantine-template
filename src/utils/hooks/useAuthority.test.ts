import { renderHook } from '@testing-library/react';
import useAuthority from './useAuthority';

describe('useAuthority', () => {
  it('denies a role-restricted page to a user without roles', () => {
    expect(renderHook(() => useAuthority([], ['admin'])).result.current).toBe(false);
  });
  it('requires a matching role', () => {
    expect(renderHook(() => useAuthority(['user'], ['admin'])).result.current).toBe(false);
    expect(renderHook(() => useAuthority(['admin'], ['admin'])).result.current).toBe(true);
  });
  it('allows pages without role requirements', () => {
    expect(renderHook(() => useAuthority([], [])).result.current).toBe(true);
  });
});
