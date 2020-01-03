module Mutations
  class InvitationWorkspaceMember < GraphQL::Schema::RelayClassicMutation
    argument :name, String, required: true
    argument :email, String, required: true
    argument :role, Integer, required: true
    argument :password, String, required: true
    argument :password_confirmation, String, required: true
    argument :workspace_id, Integer, required: true

    field :workspace_member, Types::WorkspaceMember, null: false

    def resolve(name:, email:, role:, password:, password_confirmation:, workspace_id:)
      workspace_member = InvitationWorkspaceMemberService
                           .new(
                             name: name,
                             email: email,
                             role: role,
                             password: password,
                             password_confirmation: password_confirmation,
                             workspace_id: workspace_id
                           )
                           .invite!

      {workspace_member: workspace_member}
    end
  end
end
