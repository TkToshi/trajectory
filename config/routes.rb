Rails.application.routes.draw do
  devise_for :users
  root to: "posts#index"
  resources :posts, only: [:index, :new, :create, :edit, :update, :destroy] do
    resource :likes, only: [:create, :destroy]
  end

  resources :profiles, only: [:index, :new, :create, :edit, :update, :destroy]
  resources :reletionships, only: [:create, :destroy]
  resources :users do
    resource :relationships, only: [:create, :destroy]
  end
end
