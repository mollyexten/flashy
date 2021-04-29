import api from "./apiConfig";

export const postEntry = async (deck_id, data) => {
  const resp = await api.post(`/decks/${deck_id}/entries`, { entry: data })
  return resp.data
}

export const readAllEntries = async () => {
  const resp = await api.get(`/entries`)
  return resp.data
}