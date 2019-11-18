class UsersController < ApplicationController
  # ログイン画面が完成したらこれを外す
  skip_before_action :require_sign_in!

  def index
  end
  
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save

    else

    end
  end

  private

  def user_params
    params
      .require(:user)
      .permit(
        :name,
        :mail,
        :password,
        :password_confirmation
      )
  end
end
