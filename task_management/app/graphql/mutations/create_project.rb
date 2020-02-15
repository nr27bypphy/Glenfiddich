module Mutations
  class CreateProject < GraphQL::Schema::RelayClassicMutation
    argument :title, String, required: true
    argument :description, String, required: true
    argument :workspace_member_id, Integer, required: false

    field :project, Types::ProjectType, null: false

    def resolve(title:, description:, workspace_member_id:)
      current_workspace = context[:current_workspace]
      project = current_workspace
                  .projects
                  .create!(
                    title: title,
                    description: description,
                    workspace_member_id: workspace_member_id
                  )

      {project: project}
    end
  end
end
