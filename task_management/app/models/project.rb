class Project < ApplicationRecord

  has_many :tasks
  belongs_to :workspace
  belongs_to :workspace_member, required: false

  validates :title, presence: true
  validates :workspace, presence: true
  validate :validate_workspace_member_belongs_to_workspace

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
