# frozen_string_literal: true

class WorkspaceMembersController < ApplicationController
  def index
  end

  def show
    @projects = current_workspace
                  .projects
                  .last(20)
                  .to_json(
                    only: [:title, :description, :deadline],
                    include: {
                      tasks: {
                        only: [:title, :description, :deadline]
                      }
                    }
                  )
    @workspace_member = current_workspace
                          .workspace_members
                          .find(params[:id])

  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "該当のユーザーが存在しません"
    redirect_back(fallback_location: root_path)
  end
end
