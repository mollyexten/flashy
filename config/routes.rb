Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # resources :users do
  #   resources :decks, only: [:index, :create]
  # end
  # resources :decks, only: [:show] do
  #   resources :entries, only: [:index, :create]
  # end
  # resources :entries, only: [:show, :update, :destroy]
  resources :users
  resources :decks, only: [:index, :show, :create] do
    resources :entries, only: [:index, :create]
  end
  resources :entries, only: [:show, :update, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
