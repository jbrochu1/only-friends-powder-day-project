Rails.application.routes.draw do
  resources :user_trips
  resources :mountain_trips
  resources :comments
  resources :trips
  resources :mountains
  resources :user_trips
  resources :users, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # get '/hello', to: 'application#hello_world'
  post '/login', to: 'sessions#create'
  get '/authorized_user', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html?}

end
