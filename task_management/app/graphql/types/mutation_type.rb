module Types
  class MutationType < Types::BaseObject
    field :createTask, mutation: Mutations::CreateTask
  end
end
