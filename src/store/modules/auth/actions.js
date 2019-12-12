export function update(isAuthenticated) {
  return {
    type: '@auth/UPDATE',
    isAuthenticated,
  };
}
