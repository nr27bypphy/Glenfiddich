class Task < ApplicationRecord

  belongs_to :project

  validates :title, presence: true
  validates :project, presence: true
end
