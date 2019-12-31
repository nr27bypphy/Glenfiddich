module Types
  class UsersType < Types::BaseObject
    field :users, [Types::UserType], null: true
  end
end
