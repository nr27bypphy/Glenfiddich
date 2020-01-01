class CreateUserStatus < ActiveRecord::Migration[6.0]
  def change
    create_table :user_statuses do |t|
      t.integer :user_id, limit: 8, null: false
      t.integer :workspace_id, limit: 8, null: false

      t.timestamps null: false

      t.index %i(user_id workspace_id), unique: true
    end
  end
end
