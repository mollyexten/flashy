class DecksController < ApplicationController
  before_action :authorize_request, except: [:public]
  before_action :set_deck, only: [:show, :update, :destroy]
  
  def public
    @decks = Deck.where(publicDeck: true)
    render json: @decks
  end
  
  def index
    @decks = @current_user.decks
    render json: @decks
  end
  
  def show
    render json: @deck
  end
  
  def create
    @deck = Deck.new(deck_params)
    @deck.user = @current_user
    if @deck.save
      render json: @deck, status: :created
    else
      render json: @deck.errors, status: :unprocessable_entity
    end
  end

  def update
    if @deck.update(deck_params)
      render json: @deck
    else
      render json: @deck.errors, status: :unprocessable_entity
    end
  end

  # Rails Guides helped me out a lot with this one:
  # https://guides.rubyonrails.org/association_basics.html
  def destroy
    @entries = Entry.where(deck_id: @deck.id)
    @entries.each do |entry|
      entry.destroy
    end
    @deck.destroy
  end

  private

  def set_deck
    @deck = Deck.find(params[:id])  
  end

  def deck_params
    params.require(:deck).permit(:title, :user_id, :publicDeck)
  end

end
