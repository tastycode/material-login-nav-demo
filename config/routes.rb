Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :jogs
    scope :format => true, :constraints => { :format => 'json'} do
      post "/register" => "accounts#create"
      post "/login" => "sessions#create"
      delete "/logout" => "sessions#destroy"
    end
  end
end
