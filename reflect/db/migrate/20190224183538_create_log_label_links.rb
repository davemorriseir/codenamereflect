class CreateLogLabelLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :log_label_links do |t|
      t.integer :survey_log_question_id
      t.integer :log_entry_label_id

      t.timestamps
    end
    add_index :log_label_links, :survey_log_question_id
    add_index :log_label_links, :log_entry_label_id
  end
end
