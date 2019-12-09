module Mutations
  class AddUser < GraphQL::Schema::RelayClassicMutation
    argument :name, String, required: true
    argument :email, String, required: true
    argument :role, Integer, required: true
    argument :password, String, required: true
    argument :password_confirmation, String, required: true

    field :user, Types::UserType, null: false

    def resolve(name:, email:, role:, password:, password_confirmation:)
      user = User.new(name: name,
                      email: email,
                      role: role,
                      password: password,
                      password_confirmation: password_confirmation)
      user.save!

      { user: user }
    end
  end
end
