class GlenfiddichManagementSchema < GraphQL::Schema
  include Graphql::ErrorHandler

  mutation(Types::MutationType)
  query(Types::QueryType)
end
