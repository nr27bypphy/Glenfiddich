class Project < ApplicationRecord

  belongs_to :user
  has_many :tasks

  validates :title, presence: true
  validates :user, presence: true
end
