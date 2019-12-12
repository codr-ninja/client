export default function auth(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case '@auth/UPDATE':
      return { isAuthenticated: action.isAuthenticated };
    default:
      return state;
  }
}
