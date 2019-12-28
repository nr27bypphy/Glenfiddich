module Mutations
  class DestroyUser < GraphQL::Schema::RelayClassicMutation
    argument :id, ID, required: true
    argument :current_user_id, Integer, required: true

    field :users, [Types::UserType], null: true

    def resolve(id:, current_user_id:)
      current_user = User.find(current_user_id)
      user = User.find(id)
      # owner のみ削除可能とする
      return unless current_user.owner?

      user.destroy!

      users = User.all

      { users: users }
    end
  end
end
