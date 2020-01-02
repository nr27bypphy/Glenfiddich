class Workspace < ApplicationRecord

  has_many :workspace_members
  has_many :projects

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
