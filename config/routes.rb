Rails.application.routes.draw do
  devise_for :users
  root to: "posts#index"
  resources :posts, only: [:index, :new, :create, :edit, :update, :destroy] do
    resource :likes, only: [:create, :destroy]
    collection do
      get 'search'
    end
  end

  resources :profiles, only: [:index, :new, :create, :edit, :update, :destroy] do
    collection do
      get 'search'
    end
  end

  resources :reletionships, only: [:create, :destroy]
  resources :users do
    resource :relationships, only: [:create, :destroy]
  end
end
