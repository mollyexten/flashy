Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users

  resources :entries, only: [:index]
  
  resources :decks, only: [:index, :show, :create] do
    resources :entries, only: [:create]
  end
  
  resources :entries, only: [:show, :update, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
