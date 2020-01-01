# frozen_string_literal: true

class RegistrationsController < ApplicationController
  skip_before_action :require_sign_in!, only: %i(new create)

  def new
  end

  def create
    RegistrationService.new(**registration_params).create!

    redirect_to root_path, notice: 'ログインしました'
  rescue ActiveRecord::RecordInvalid => e
    flash.now[:alert] = e.errors.messages
    render :new
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
end
