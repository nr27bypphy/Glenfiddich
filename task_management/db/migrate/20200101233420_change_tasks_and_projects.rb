class ChangeTasksAndProjects < ActiveRecord::Migration[6.0]
  def up
    add_column :tasks, :workspace_member_id, :integer, limit: 8, comment: 'taskを担当するworkspace_member 担当者が未定でも作成出来る様にnull許可'
    add_column :projects, :workspace_member_id, :integer, limit: 8, comment: 'projectの主担当となるworkspace_member 主担当が未定でも作成出来るようにnull許可'
    add_column :projects, :workspace_id, :integer, limit: 8, null: false, comment: 'projectが所属するworkspace'
    remove_column :projects, :user_id

    add_index :projects, :workspace_id
    add_index :tasks, :project_id
  end

  def down
    remove_column :tasks, :workspace_member_id
    remove_column :projects, :workspace_member_id
    remove_column :projects, :workspace_id
    add_column :projects, :user_id, imit: 8

    remove_index :projects, :workspace_id
    remove_index :tasks, :project_id
  end
end
