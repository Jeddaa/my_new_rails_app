Rails.application.routes.draw do
  get 'greeting/index'
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  namespace :api, :defaults => {:format => :json}  do
    resources :greetings, only: [:index]
  end

  root to: 'root#index'
end
