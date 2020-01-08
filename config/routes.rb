Rails.application.routes.draw do
  scope '/api/v1' do
    resources :bottles
    resources :users
    resources :wineries, only: [:index, :create, :update, :destroy]
    resources :user_bottles
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
