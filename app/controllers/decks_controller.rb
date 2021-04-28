class DecksController < ApplicationController
  before_action :authorize_request
  # before_action :set_user, only: [:index, :create]
  def index
    @decks = @current_user.decks
    render json: @decks
  end
  
  def show
    @deck = Deck.find(params[:id])
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

  private

  # def set_user
  #   @user = User.find(params[:user_id])
  # end

  def deck_params
    params.require(:deck).permit(:title, :user_id)
  end

end
