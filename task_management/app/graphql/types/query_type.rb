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
    field :workspace_members,
          Types::WorkspaceMemberType.connection_type,
          null: true,
          resolve: ->(_object, _args, context) do
            current_workspace = context[:current_user].current_workspace
            current_workspace.workspace_members
          end
  end
end
