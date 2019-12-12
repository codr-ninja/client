export default function user(state = {}, action) {
  switch (action.type) {
    case '@user/AUTH_SUCCESS':
      return action.user;
    default:
      return state;
  }
}
