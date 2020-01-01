# frozen_string_literal: true

class RegistrationsController < ApplicationController
  skip_before_action :require_sign_in!, only: %i(new create)
  before_action :redirect_to_dashboard_if_logged_in, only: %i(new create)

  def new
  end

  def create
    RegistrationService.new(registration_params).create!
    log_in user

    redirect_to root_path, notice: 'ログインしました'
  rescue ActiveRecord::RecordInvalid => e
    flash.now[:alert] = e.record.errors.full_messages.join(', ')
    render :new, status: :unprocessable_entity
  end

  private

  def registration_params
    params
      .require(:registration)
      .permit(
        :workspace_name,
        :user_name,
        :email,
        :password,
        :password_confirmation
      )
  end

  def user
    User.find_by(email: registration_params[:email])
  end
end
