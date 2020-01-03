module Mutations
  class CreateUser < GraphQL::Schema::RelayClassicMutation
    argument :name, String, required: true
    argument :email, String, required: true
    argument :role, Integer, required: true
    argument :password, String, required: true
    argument :password_confirmation, String, required: true

    field :user, Types::UserType, null: false

    def resolve(name:, email:, role:, password:, password_confirmation:)
      user = User.new(
        name: name,
        email: email,
        role: role,
        password: password,
        password_confirmation: password_confirmation,
      )

      if user.save
        {user: user}
      else
        raise GraphQL::ExecutionError.new(user.errors.full_messages.join(', '))
      end
    end
  end
end
