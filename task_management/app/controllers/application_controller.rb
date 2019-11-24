# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :require_sign_in!
  protect_from_forgery with: :exception

  include SessionConcern
end
