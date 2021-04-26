class EntriesController < ApplicationController
  before_action :set_deck, only: [:index, :create]
  before_action :set_entry, only: [:show, :update, :destroy]
 
  def index
    @entries = Entry.where(deck_id: @deck)
    render json: @entries, include: :deck, status: :ok
  end

  def show
    render json: @entry
  end
  
  def create
    @entry = Entry.new(entry_params)
    if @entry.save
      render json: @entry, status: :created
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end
  
  def update
    if @entry.update(entry_params)
      render json: @entry
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  private
  
  def set_deck
    @deck = Deck.find(params[:deck_id])
  end

  def set_entry
    @entry = Entry.find(params[:id])
  end
  
  def entry_params
    params.require(:entry).permit(:term, :details, :deck_id)
  end

end
