class Project < ApplicationRecord

  has_many :tasks
  belongs_to :workspace
  # 主担当者
  belongs_to :workspace_member, required: false

  validates :title, presence: true
  validates :workspace, presence: true
  validate :validate_workspace_member_belongs_to_workspace

  # @todo リファクタ
  def hurry_task_count
    tasks
      .where('deadline <= ?', Time.zone.today)
      .count
  end

  # @todo リファクタ
  def afford_task_count
    tasks
      .where('deadline <= ?', Time.zone.today.since(3.days))
      .where('deadline > ?', Time.zone.today)
      .count
  end

  # @todo リファクタ
  def middle_task_count
    tasks
      .where('deadline > ?', Time.zone.today.since(3.days))
      .count
  end

  private

  # 主担当者 が紐づいている workspace と プロジェクトが紐づいている workspace が一致しているか
  def validate_workspace_member_belongs_to_workspace
    # workspace_member が nil の時はチェックの対象外なので return
    return if workspace_member.nil?

    # 紐づいている workspace が一致しているなら return
    return if workspace_member.workspace == workspace

    errors.add(:base, '設定した担当者が不正です')
  end
end
