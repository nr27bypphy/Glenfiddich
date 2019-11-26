Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "api/v1/graphql"
  end
  post "/graphql", to: "graphql#execute"

  # ログイン/ログアウト
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  resources :users, only: %i(index new create)

  namespace :api, { format: 'json' } do
    namespace :v1 do
      post "/graphql", to: "graphql#execute"
    end
  end

  root to: "dashboards#index"
end
