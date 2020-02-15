module Types
  class MutationType < Types::BaseObject
    field :createTask, mutation: Mutations::CreateTask, description: 'タスクを新規作成する'
    field :createUser, mutation: Mutations::CreateUser, description: 'userを作成する'
    field :destroyUser, mutation: Mutations::DestroyUser, description: 'userを削除する'
    field :invitationWorkspaceMember, mutation: Mutations::InvitationWorkspaceMember, description: 'ワークスペースメンバーを招待する'
    field :createProject, mutation: Mutations::CreateProject, description: 'プロジェクトを新規作成する'
    field :destroyWorkspaceMember, mutation: Mutations::DestroyWorkspaceMember, description: 'ワークスペースメンバーを削除する'
  end
end
