# frozen_string_literal: true

class RegistrationsController < ApplicationController
  skip_before_action :require_sign_in!, only: %i(new create)

  def new
  end

  def create
  end
end
