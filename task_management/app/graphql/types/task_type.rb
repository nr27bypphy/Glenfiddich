module Types
  class TaskType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :user_id, Int, null: false
    field :description, String, null: false
    field :is_approved, Boolean, null: false
  end
end
