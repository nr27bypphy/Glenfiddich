class ApplicationPolicy
  attr_reader :current_workspace_member, :record

  def initialize(current_workspace_member, record)
    @current_workspace_member = current_workspace_member
    @record = record
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
