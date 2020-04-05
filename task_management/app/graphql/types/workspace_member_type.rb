module Types
  class WorkspaceMemberType < Types::BaseObject
    field :id, ID, null: false
    field :user_id, Integer, null: false
    field :workspace_id, Integer, null: false
    field :role, Role, null: false
    field :user, UserType, null: false
    field :hurry_task_count, Integer, null: true, description: '期限が当日 or 過ぎている task の個数'
    field :afford_task_count, Integer, null: true, description: '期限が当日 ~ 3日後'
    field :middle_task_count, Integer, null: true, description: '期限が4日以上先'
    field :not_approve_task_count, Integer, null: true, description: '承認されていない task の個数'
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
