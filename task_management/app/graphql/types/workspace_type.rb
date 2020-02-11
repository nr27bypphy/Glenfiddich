module Types
  class WorkspaceType < Types::BaseObject
    field :id, ID, null: false, description: 'ワークスペースのid'
    field :name, String, null: false, description: 'ワークスペース名'
  end
end