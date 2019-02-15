class ChangeTypeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :surveys, :type, :survey_type
  end
end
