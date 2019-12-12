export function authSuccess(user) {
  return {
    type: '@user/AUTH_SUCCESS',
    user,
  };
}
