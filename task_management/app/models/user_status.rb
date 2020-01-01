class UserStatus < ApplicationRecord

  belongs_to :user
  belongs_to :workspace

  validates :user, presence: true
  validates :workspace, presence: true
  validates :user_id, uniqueness: { scope: :workspace_id }
end
