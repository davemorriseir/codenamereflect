class CreateLogEntryLabels < ActiveRecord::Migration[5.0]
  def change
    create_table :log_entry_labels do |t|
      t.string :value
      t.boolean :sentiment

      t.timestamps
    end
  end
end
