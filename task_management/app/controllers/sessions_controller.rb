# frozen_string_literal: true

class SessionsController < ApplicationController
  skip_before_action :require_sign_in!, only: %i(new create)
  before_action :set_user, only: %i(create)

  def new
  end

  def create
    if @user.authenticate(session_params[:password])
      log_in @user
      session_params[:remember_me] == '1' ? remember(@user) : forget(@user)
      redirect_to root_path, notice: "ログインしました"
    else
      render 'new'
    end
  end

  def destroy
    log_out if current_user
    redirect_to login_path
  end

  private

  def set_user
    @user = User.find_by!(mail: session_params[:mail])
  rescue ActiveRecord::RecordNotFound
    flash.now[:alert] = "ユーザーが存在しません"
    render :new
  end

  # 許可するパラメータ
  def session_params
    params.require(:session).permit(:mail, :password, :remember_me)
  end
end
