class EntriesController < ApplicationController
  before_action :set_deck
  def index
    @entries = Entry.where(deck_id: @deck)
    render json: @entries, include: :deck, status: :ok
  end
  def create
    @entry = Entry.new(entry_params)
    if @entry.save
      render json: @entry, status: :created
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end
  private
  def set_deck
    @deck = Deck.find(params[:deck_id])
  end
  def entry_params
    params.require(:entry).permit(:term, :details, :deck_id)
  end
end
