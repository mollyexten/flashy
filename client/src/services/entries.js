import api from "./apiConfig";

export const readAllEntries = async () => {
  const resp = await api.get(`/entries`)
  return resp.data
}
export const postEntry = async (deck_id, data) => {
  const resp = await api.post(`/decks/${deck_id}/entries`, { entry: data })
  return resp.data
}

export const putEntry = async (id, data) => {
  const resp = await api.put(`/entries/${id}`, data);
  return resp.data;
}

export const deleteEntry = async (id) => {
  const resp = await api.delete(`/entries/${id}`);
  return resp.data;
}