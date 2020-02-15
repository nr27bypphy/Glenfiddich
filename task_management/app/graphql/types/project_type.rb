module Types
  class ProjectType < Types::BaseObject
    field :id, ID, null: false, description: 'プロジェクトのID'
    field :title, String, null: false, description: 'プロジェクトのタイトル'
    field :description, String, null: true, description: 'プロジェクトの概要'
    field :deadline, GraphQL::Types::ISO8601DateTime, null: true, description: 'プロジェクトの締め切り'
    field :workspaceMemberId, Integer, null: true, description: '担当するワークスペースメンバーのID'
    field :workspace, Types::WorkspaceType, null: false, description: '紐づいているワークスペース'
    field :workspaceMember, Types::WorkspaceMemberType, null: true, description: '担当のワークスペースメンバー'
    field :hurry_task_count, Integer, null: true, description: '期限が当日 or 過ぎている task の個数'
    field :afford_task_count, Integer, null: true, description: '期限が当日 ~ 3日後'
    field :middle_task_count, Integer, null: true, description: '期限が4日以上先'
  end
end
