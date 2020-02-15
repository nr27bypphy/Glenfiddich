module Mutations
  class InvitationWorkspaceMember < GraphQL::Schema::RelayClassicMutation
    argument :name, String, required: true
    argument :email, String, required: true
    argument :role, Integer, required: true
    argument :password, String, required: true
    argument :password_confirmation, String, required: true

    field :workspace_member, Types::WorkspaceMemberType, null: false

    def resolve(name:, email:, role:, password:, password_confirmation:)
      workspace = context[:current_workspace]
      workspace_member = InvitationWorkspaceMemberService
                           .new(
                             name: name,
                             email: email,
                             role: role,
                             password: password,
                             password_confirmation: password_confirmation,
                             workspace: workspace
                           )
                           .invite!

      {workspace_member: workspace_member}
    end
  end
end
