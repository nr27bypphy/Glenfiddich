module Types
  class MutationType < Types::BaseObject
    field :createTask, mutation: Mutations::CreateTask
    field :addUser, mutation: Mutations::AddUser
    field :destroyUser, mutation: Mutations::DestroyUser
  end
end
