import api from "./apiConfig";

export const postDeck = async (data) => {
  const resp = await api.post("/decks", { deck: data })
  return resp.data
}

export const readAllDecks = async () => {
  const resp = await api.get(`/decks`)
  return resp.data
}