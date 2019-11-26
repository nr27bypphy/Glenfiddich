module Types
  class QueryType < Types::BaseObject
    field :tasks, Types::TaskType.connection_type, null: false, resolve: -> (_object, _args, _context) do
      Task.all
    end

    field :test_field, String, null: false,
    description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end
  end
end
