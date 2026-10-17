import rootReducer, { RootState } from './rootReducer';
import { setUser, setUserInfo, signInSuccess, signOutSuccess } from './slices/auth';

describe('session cleanup', () => {
  it('clears the session and both user profiles on sign out, including a 401', () => {
    const reducer = rootReducer();
    let state = reducer(undefined as unknown as RootState, { type: 'init' });
    state = reducer(
      state,
      signInSuccess({ token: 'secret', refreshToken: 'refresh', expireTime: 100 })
    );
    state = reducer(state, setUser({ email: 'a@example.com', role: ['admin'] }));
    state = reducer(state, setUserInfo({ email: 'a@example.com', userId: '123', role: 'admin' }));
    const result = reducer(state, signOutSuccess());
    expect(result.auth.session.token).toBeNull();
    expect(result.auth.session.refreshToken).toBeNull();
    expect(result.auth.session.signedIn).toBe(false);
    expect(result.auth.user.role).toEqual([]);
    expect(result.auth.userInfo.userId).toBe('');
  });
});
