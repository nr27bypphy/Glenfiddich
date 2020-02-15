module Types
  class WorkspaceMemberType < Types::BaseObject
    field :id, ID, null: false
    field :user_id, Integer, null: false
    field :workspace_id, Integer, null: false
    field :role, Role, null: false
    field :user, UserType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
