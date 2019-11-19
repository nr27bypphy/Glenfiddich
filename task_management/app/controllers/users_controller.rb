# frozen_string_literal: true

class UsersController < ApplicationController
  # ログイン画面が完成したらこれを外す
  skip_before_action :require_sign_in!, only: %i(new create)

  def index
  end
  
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.save!
    sign_in(@user)

    redirect_to root_path
  rescue ActiveRecord::RecordInvalid => e
    render new
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
