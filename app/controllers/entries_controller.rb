class EntriesController < ApplicationController
  before_action :set_deck
  def index
    @entries = Entry.where(deck_id: @deck)
    render json: @entries, include: :deck, status: :ok
  end
  private
  def set_deck
    @deck = Deck.find(params[:deck_id])
  end
end
