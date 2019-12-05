module Mutations
  class CreateTask < GraphQL::Schema::RelayClassicMutation
    argument :title, String, required: true
    argument :user_id, Integer, required: true
    argument :description, String, required: true

    field :task, Types::TaskType, null: false

    def resolve(title:, user_id:, description:)
      task = Task.new(title: title, user_id: user_id, description: description)
      task.save!

      { task: task }
    end

    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
  end
end
