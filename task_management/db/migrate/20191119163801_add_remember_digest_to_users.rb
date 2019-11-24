class AddRememberDigestToUsers < ActiveRecord::Migration[6.0]
  def up
    add_column :users, :remember_digest, :string
    remove_column :users, :remember_token
  end

  def down
    remove_column :users, :remember_digest
    add_column :users, :remember_token, limit: 191
  end
end
