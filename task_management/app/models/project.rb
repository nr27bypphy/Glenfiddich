class Project < ApplicationRecord

  has_many :tasks
  belongs_to :workspace
  belongs_to :workspace_member, required: false

  validates :title, presence: true
  validates :workspace, presence: true
end
