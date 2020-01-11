class WorkspaceMember < ApplicationRecord

  belongs_to :workspace
  belongs_to :user

  enum role: { owner: 0, admin: 1, member: 2, guest: 3 }

  validates :workspace, presence: true
  validates :user, presence: true
  validates :workspace_id, uniqueness: { scope: :user_id }
  validates :role, presence: true
end
