class UserStatus < ApplicationRecord

  belongs_to :user
  belongs_to :workspace

  validates :user, presence: true, uniqueness: true
  validates :workspace, presence: true
end
