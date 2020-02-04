module Types
  class MutationType < Types::BaseObject
    field :createTask, mutation: Mutations::CreateTask
    field :createUser, mutation: Mutations::CreateUser
    field :destroyUser, mutation: Mutations::DestroyUser
    field :invitationWorkspaceMember, mutation: Mutations::InvitationWorkspaceMember
    field :createProject, mutation: Mutations::CreateProject
  end
end
