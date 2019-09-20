Rails.application.routes.draw do
  root 'items#index'
  resources :users, only: :show do
    resources :creditcards, only: [:index, :new, :create]
  end
  get 'logout', to: 'users#logout'
  get 'profile_edit', to: 'users#profile_edit'
  # ルートの仮置きです
end
