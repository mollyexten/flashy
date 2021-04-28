class EntriesController < ApplicationController
  before_action :set_deck, only: [:create]
  before_action :set_entry, only: [:show, :update, :destroy]
  before_action :authorize_request

  def index
    # @decks = Deck.where(user_id: @current_user.id)
    # @entries = Entry.where('deck_id IN (?)': @decks)
    @user = User.find(params[:user_id])
    render json: @entries, status: :ok
  end

  def show
    render json: @entry
  end
  
  def create
    @entry = Entry.new(entry_params)
    @entry.deck = @deck
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

  def destroy
    @entry.destroy
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
