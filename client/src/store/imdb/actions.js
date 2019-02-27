import { axios } from 'boot/axios'

export async function FIND_USERS (context, payload) {
  context.commit('USERS_FIND_REQUEST')
  try {
    const response = await axios({
      method: 'GET',
      url: '/api/rest/users',
      params: {
        limit: 25,
        skip: 0,
        sort: 'id ASC',
        ...payload
      }
    })
    context.commit('USERS_FIND_SUCCESS', response.data)
  } catch (e) {
    context.commit('USERS_FIND_FAILURE', e)
  }
}
