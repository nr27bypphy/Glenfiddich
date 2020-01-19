class InvitationWorkspaceMemberService
  attr_reader :name, :user, :role, :password, :password_confirmation, :workspace

  def initialize(name:, email:, role:, password:, password_confirmation:, workspace_id:)
    @name = name
    @role = role
    @password = password
    @password_confirmation = password_confirmation
    @user = User.find_or_initialize_by(email: email)
    @workspace = Workspace.find(workspace_id)
  end

  def invite!
    WorkspaceMember.transaction do
      # まだ user が作成されていなければ作成しておく
      create_user! unless user.persisted?
      create_workspace_member!
      # まだ user_status が作成されていなければ作成しておく
      create_user_status! unless user.user_status
    end

    # view で使いたいので作成した workspace_member を返す
    user.workspace_members.find_by(workspace: workspace)
  end

  def create_user!
    user.update!(name: name, password: password, password_confirmation: password_confirmation)
  end

  def create_workspace_member!
    user.workspace_members.create!(workspace: workspace, role: role)
  end

  def create_user_status!
    user.create_user_status!(workspace: workspace)
  end
end
