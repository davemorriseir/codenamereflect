class CreateSurveySectionQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :survey_section_questions do |t|
      t.integer :question_id
      t.integer :section_id

      t.timestamps
    end
    add_index :survey_section_questions, :question_id
    add_index :survey_section_questions, :section_id
  end
end
