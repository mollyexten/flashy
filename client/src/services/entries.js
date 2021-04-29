import api from "./apiConfig";

export const createEntry = async (data) => {
  const resp = await api.post("/entries", { deck: data })
  return resp.data
}

export const readAllEntries = async () => {
  const resp = await api.get(`/entries`)
  return resp.data
}