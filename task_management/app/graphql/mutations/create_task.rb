module Mutations
  class CreateTask < GraphQL::Schema::RelayClassicMutation
    argument :title, String, required: true
    argument :user_id, Integer, required: true
    argument :description, String, required: true
    argument :is_approved, Boolean, required: true

    field :task, Types::TaskType, null: false

    def resolve(title:, user_id:, description:, is_approved:)
      task = Task.new(title: title, user_id: user_id, description: description, is_approved: is_approved)
      task.save!

      { task: task }
    end
  end
end
