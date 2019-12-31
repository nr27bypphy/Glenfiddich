class Workspace < ApplicationRecord

  has_many :workspace_members

  validates :name, null: false, uniqueness: { case_sensitive: false }
end
