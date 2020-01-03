# frozen_string_literal: true

class DashboardsController < ApplicationController
  def index
    @tasks = []
    @users = User.all
    @current_workspace = current_workspace
  end
end
