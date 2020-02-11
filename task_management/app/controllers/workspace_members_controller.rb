# frozen_string_literal: true

class WorkspaceMembersController < ApplicationController
  def index
    @workspace_members = current_workspace.workspace_members
  end
end
