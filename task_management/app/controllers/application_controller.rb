# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :require_sign_in!
  protect_from_forgery with: :exception

  include SessionConcern
  # include しているが現在はまだ権限管理の設定をしていないので実質機能していない
  # @todo user の権限による制御を追加する
  include Pundit
end
