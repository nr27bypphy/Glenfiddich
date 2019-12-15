# frozen_string_literal: true

class DashboardsController < ApplicationController
  def index
    @tasks = []
    @users = User.all
  end
end
