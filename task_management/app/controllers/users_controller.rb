# frozen_string_literal: true

class UsersController < ApplicationController
  skip_before_action :require_sign_in!, only: %i(new create)
  before_action :redirect_to_dashboard_if_logged_in, only: %i(new create)
  before_action :build_user, only: %i(new create)

  def index
  end
  
  def new
  end

  def create
    @user.update!(user_params)
    log_in @user

    redirect_to root_path
  rescue ActiveRecord::RecordInvalid => e
    render :new
  end

  private

  def build_user
    @user = User.new
  end

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
