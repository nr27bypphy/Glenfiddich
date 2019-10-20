class Users < ActiveRecord::Migration[6.0]
  def change
    create_table "users", force: :cascade do |t|
      t.string "name", limit: 191, null: false
      t.string "mail", limit: 191, null: false
      t.string "password_digest", limit: 191, null: false
      t.string "remember_token", limit: 191
      t.timestamps null: false
    end
    add_index :users, :mail, unique: true
  end
end
