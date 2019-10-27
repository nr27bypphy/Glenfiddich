class SessionsController < ApplicationController
  before_action :set_user, only: %i(create)
  skip_before_action :require_sign_in!

  def new
  end

  def create
    if @user.authenticate(session_params[:password])
      sign_in(@user)
      flash[:success] = "ログインしました"
      redirect_to root_path
    else
      flash.now[:error] = @user.errors.full_messages
      render 'new'
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
    flash[:error] = 'ユーザーが存在しません'
    render :new
  end

  # 許可するパラメータ
  def session_params
    params.require(:session).permit(:mail, :password)
  end
end