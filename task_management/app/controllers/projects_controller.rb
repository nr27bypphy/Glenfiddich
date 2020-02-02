class ProjectsController < ApplicationController
  def index
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
  end
end
