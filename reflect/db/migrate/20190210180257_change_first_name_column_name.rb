class ChangeFirstNameColumnName < ActiveRecord::Migration[5.0]
  def self.up
    rename_column :users, :firstName, :first_name
  end
end
