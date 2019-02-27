
export function USERS_FIND_REQUEST (state, payload) {
  state.users = {
    ...state.users,
    loading: true,
    error: null
  }
}

export function USERS_FIND_SUCCESS (state, payload) {
  state.users = {
    ...state.users,
    loading: false,
    list: [...state.users.list, ...payload]
  }
}

export function USERS_FIND_FAILURE (state, payload) {
  state.users = {
    ...state.users,
    loading: false,
    error: payload
  }
}
