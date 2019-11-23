module Types
  class QueryType < Types::BaseObject
    field :tasks, Types::TaskType.connection_type, null: false, resolve: -> (_object, _args, _context) do
      Task.all
    end
  end
end
