Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"

  get 'level_one/challenge', to: 'pages#level_one_challenge'
  get 'level_one/snippet', to: 'pages#level_one_snippet'
  get :level_one_checkpoint, to: 'pages#level_one_checkpoint'
  get :level_two_checkpoint, to: 'pages#level_two_checkpoint'
  get :level_three_checkpoint, to: 'pages#level_three_checkpoint'


  get 'level_two/challenge/step_one', to: 'pages#level_two_challenge_step_one'
  get 'level_two/challenge/step_two', to: 'pages#level_two_challenge_step_two'
  get 'level_two/challenge/step_three', to: 'pages#level_two_challenge_step_three'
  get 'level_two/challenge/step_four', to: 'pages#level_two_challenge_step_four'
  get 'level_two/challenge/step_five', to: 'pages#level_two_challenge_step_five'
  get 'level_two/snippet', to: 'pages#level_two_snippet'

  get 'level_three/challenge', to: 'pages#level_three_challenge'
  get 'level_three/snippet', to: 'pages#level_three_snippet'

  get 'graduation', to: 'pages#graduation'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
