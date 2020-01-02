class Task < ApplicationRecord

  belongs_to :project
  belongs_to :workspace_member

  validates :title, presence: true
  validates :project, presence: true
end
