module Types
  class QueryType < Types::BaseObject
    field :tasks,
          Types::TaskType.connection_type,
          null: false,
          resolve: ->(_object, _args, _context) do
            Task.all
          end
    field :users,
          Types::UserType.connection_type,
          null: false,
          resolve: ->(_object, _args, _context) do
            User.all
          end
    field :workspace_members, [Types::WorkspaceMemberType], null: true, description: '現在使用しているワークスペースの全メンバー'
    field :projects,  [Types::ProjectType], null: true do
      argument :workspace_member_id, Integer, required: false
      description 'プロジェクトの一覧を取得する'
    end

    def workspace_members
      workspace = context[:current_workspace]
      workspace.workspace_members
    end

    def projects(workspace_member_id: nil)
      workspace = context[:current_workspace]

      projects = workspace.projects
      projects = projects.where(workspace_member_id: workspace_member_id) if !workspace_member_id.nil?

      projects
    end
  end
end
