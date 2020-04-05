class AddColumnToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :is_approved, :boolean

  end
end
