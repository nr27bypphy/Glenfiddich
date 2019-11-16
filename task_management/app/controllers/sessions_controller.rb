class SessionsController < ApplicationController
  before_action :set_user, only: %i(create)
  skip_before_action :require_sign_in!

  def new
  end

  def create
    if @user.authenticate(session_params[:password])
      sign_in(@user)
      redirect_to root_path, notice: "ログインしました"
    else
      render 'new', alert: @user.errors.full_messages.first
    end
  end

  def destroy
    sign_out
    redirect_to login_path
  end

  private

  def set_user
    @user = User.find_by!(mail: session_params[:mail])
  rescue ActiveRecord::RecordNotFound
    render :new, alert: "ユーザーが存在しません"
  end

  # 許可するパラメータ
  def session_params
    params.require(:session).permit(:mail, :password)
  end
end
