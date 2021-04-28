import api from "./apiConfig";

export const createDeck = async (data) => {
  const resp = await api.post("/decks", { deck: data })
  return resp.data
}

export const readAllDecks = async () => {
  const resp = await api.get("/decks")
  return resp.data
}

export const readOneDeck = async (id) => {
  const resp = await api.get(`/decks/${id}`)
  return resp.data
}