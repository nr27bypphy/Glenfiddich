module Mutations
  class DestroyWorkspaceMember < GraphQL::Schema::RelayClassicMutation
    argument :workspace_member_id, Integer, required: true

    field :workspace_member, Types::WorkspaceMemberType, null: false

    def resolve(workspace_member_id:)
      current_user = context[:current_user]
      current_workspace = context[:current_workspace]
      workspace_member = current_workspace
                           &.workspace_members
                           &.find_by(id: workspace_member_id)

      if !Pundit.policy!(current_user.current_workspace_member, workspace_member).destroy?
        raise '削除できないユーザーです'
      end

      workspace_member&.destroy!

      {workspace_member: workspace_member}
    end
  end
end
