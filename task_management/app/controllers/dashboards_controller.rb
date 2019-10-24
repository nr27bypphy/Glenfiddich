# frozen_string_literal: true

class DashboardsController < ApplicationController
  # @todo ログイン周りが完了して、ログイン後にだけこの　controller は表示するだけでよくなったら skip_before_action を削除する
  skip_before_action :require_sign_in!

  def index
  end
end
