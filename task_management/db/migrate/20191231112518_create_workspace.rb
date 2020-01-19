class CreateWorkspace < ActiveRecord::Migration[6.0]
  def change
    create_table :workspaces do |t|
      t.string :name, null: false

      t.timestamps null: false

      t.index :name, unique: true
    end

    create_table :workspace_members do |t|
      t.integer :user_id, limit: 8, null: false
      t.integer :workspace_id, limit: 8, null: false
      t.integer :role, unsigned: true, limit: 1, null: false, default: 1

      t.timestamps null: false

      t.index %i(user_id workspace_id), unique: true
    end
  end
end
