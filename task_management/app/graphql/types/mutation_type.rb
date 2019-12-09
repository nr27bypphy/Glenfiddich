module Types
  class MutationType < Types::BaseObject
    field :createTask, mutation: Mutations::CreateTask
    field :addUser, mutation: Mutations::AddUser
  end
end
