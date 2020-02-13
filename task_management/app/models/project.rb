class Project < ApplicationRecord

  has_many :tasks
  belongs_to :workspace
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

  # 設定した担当者が workspace に所属するメンバーかをチェックする
  def validate_workspace_member_belongs_to_workspace
    # workspace_member が nil の時はチェックの対象外なので return
    return if workspace_member.nil?

    member = workspace.workspace_members.find_by(id: workspace_member.id)
    return if member.present?

    errors.add(:base, '設定した担当者が不正です')
  end
end
