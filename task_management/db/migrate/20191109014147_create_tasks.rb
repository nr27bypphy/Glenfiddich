class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title, limit: 191, null: false
      # 担当者は後付けにも対応できるよう nullable にしている
      t.integer :user_id, limit: 8
      t.string :description
      t.datetime :deadline, precision: 6

      t.timestamps null: false
    end
  end
end
