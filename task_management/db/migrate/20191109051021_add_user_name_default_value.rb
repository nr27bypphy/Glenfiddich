class AddUserNameDefaultValue < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :name, :string, default: "no name"
  end
end
