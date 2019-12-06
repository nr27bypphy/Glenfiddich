class AddProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title, limit: 191, null: false
      t.integer :user_id, limit: 8, null: false
      t.string :description
      t.datetime :deadline, precision: 6

      t.timestamps null: false
    end
  end
end
