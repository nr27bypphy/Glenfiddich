class RenameUserMail < ActiveRecord::Migration[6.0]
  def up
    rename_column :users, :mail, :email
  end

  def down
    rename_column :users, :email, :mail
  end
end
