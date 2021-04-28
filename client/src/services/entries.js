import api from "./apiConfig";

export const createEntry = async (data) => {
  const resp = await api.post("/entries", { deck: data })
  return resp.data
}

export const readAllEntries = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/entries`)
  return resp.data
}