class AddProjectIdToTask < ActiveRecord::Migration[6.0]
  def up
    add_column :tasks, :project_id, :integer, limit: 8, null: false
    remove_column :tasks, :user_id
  end

  def down
    remove_column :tasks, :project_id
    add_column :tasks, :user_id, imit: 8
  end
end
