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
    
    def workspace_members
      workspace = context[:current_workspace]
      workspace.workspace_members
    end
  end
end
