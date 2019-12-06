class AddUserRole < ActiveRecord::Migration[6.0]
  def up
    add_column :users, :role, :integer, unsigned: true, limit: 1, null: false, default: 1
  end

  def down
    remove_column :users, :role
  end
end
