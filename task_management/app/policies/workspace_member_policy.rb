class WorkspaceMemberPolicy < ApplicationPolicy

  # 同じ workspace で かつ　owner なら削除可能
  #
  # @override
  def destroy?
    # 同じ workspace　でない場合は false
    return false if current_workspace_member.workspace != record.workspace

    current_workspace_member.owner?
  end
end
