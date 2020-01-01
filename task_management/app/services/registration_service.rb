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
end
