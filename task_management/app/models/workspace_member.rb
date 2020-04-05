class WorkspaceMember < ApplicationRecord

  has_many :tasks
  belongs_to :workspace
  belongs_to :user

  enum role: { owner: 0, admin: 1, member: 2, guest: 3 }

  validates :workspace, presence: true
  validates :user, presence: true
  validates :workspace_id, uniqueness: { scope: :user_id }
  validates :role, presence: true

  # @todo リファクタ
  def hurry_task_count
    tasks
      .where('deadline <= ?', Time.zone.today)
      .where(is_approved: true)
      .count
  end

  # @todo リファクタ
  def afford_task_count
    tasks
      .where('deadline <= ?', Time.zone.today.since(3.days))
      .where('deadline > ?', Time.zone.today)
      .where(is_approved: true)
      .count
  end

  # @todo リファクタ
  def middle_task_count
    tasks
      .where('deadline > ?', Time.zone.today.since(3.days))
      .where(is_approved: true)
      .count
  end

  # @todo リファクタ
  def not_approve_task_count
    tasks
      .where(is_approved: false)
      .count
  end
  
end
