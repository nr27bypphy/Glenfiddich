# 特定の操作を行う権限があるかをチェックするPolicyObjectの親クラス
# user のみで判別できる操作を行う場合に継承する
class ApplicationHeadlessPolicy
  attr_reader :user

  def initialize(user, _ = nil)
    @user = user
  end

  def index?
    false
  end

  def show?
    false
  end

  def create?
    false
  end

  def new?
    create?
  end

  def update?
    false
  end

  def edit?
    update?
  end

  def destroy?
    false
  end
end
