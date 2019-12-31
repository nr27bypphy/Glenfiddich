class Workspace < ApplicationRecord

  has_many :workspace_members

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
