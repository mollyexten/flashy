import api from "./apiConfig";

export const postDeck = async (data) => {
  const resp = await api.post("/decks", { deck: data })
  return resp.data
}

export const putDeck = async (id, data) => {
  const resp = await api.put(`/decks/${id}`, data)
  return resp.data
}

export const readUserDecks = async () => {
  const resp = await api.get(`/decks`)
  return resp.data
}

export const readPublicDecks = async () => {
  const resp = await api.get('/public-decks')
  return resp.data
}

export const deleteDeck = async (id) => {
  const resp = await api.delete(`/decks/${id}`)
  return resp.data
}