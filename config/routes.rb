Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  
  get 'level_one/challenge', to: 'pages#level_one_challenge'
  get 'level_one/snippet', to: 'pages#level_one_snippet'


  get 'level_two/challenge', to: 'pages#level_two_challenge'
  get 'level_two/snippet', to: 'pages#level_two_snippet'

  get 'level_three/challenge', to: 'pages#level_three_challenge'
  get 'level_three/snippet', to: 'pages#level_three_snippet'

  get 'graduation', to: 'pages#graduation'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
