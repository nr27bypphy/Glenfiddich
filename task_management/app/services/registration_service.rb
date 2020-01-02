class RegistrationService
  attr_reader :workspace_name, :user_name, :email, :password, :password_confirmation

  def initialize(params)
    @workspace_name = params[:workspace_name]
    @user_name = params[:user_name]
    @email = params[:email]
    @password = params[:password]
    @password_confirmation = params[:password_confirmation]
  end

  def create!
    User.transaction do
      user = create_user!
      workspace = create_workspace!
      create_workspace_member!(user, workspace)
      create_user_status!(user, workspace)
    end
  end

  def create_user!
    User
      .create!(
        name: user_name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      )
  end

  def create_workspace!
    Workspace.create!(name: workspace_name)
  end

  def create_workspace_member!(user, workspace)
    # このタイミングでは、常にオーナーメンバーとして作成する
    user
      .workspace_members
      .create!(
        workspace: workspace,
        role: :owner
      )
  end

  # ダッシュボードで表示するときの workspace を設定しておく
  def create_user_status!(user, workspace)
    user.create_user_status!(workspace: workspace)
  end
end
