module Types
  class ProjectType < Types::BaseObject
    field :id, ID, null: false, description: 'プロジェクトのID'
    field :title, String, null: false, description: 'プロジェクトのタイトル'
    field :description, String, null: true, description: 'プロジェクトの概要'
    field :workspaceMemberId, Integer, null: true, description: '担当するワークスペースメンバーのID'
    field :workspace, Types::WorkspaceType, null: false, description: '紐づいているワークスペース'
    field :workspaceMember, Types::WorkspaceMemberType, null: true, description: '担当のワークスペースメンバー'
  end
end
