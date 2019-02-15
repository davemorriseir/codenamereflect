class CreateSurveyAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :survey_answers do |t|
      t.integer :survey_id
      t.integer :survey_question_id
      t.string :value
      t.string :answer_type

      t.timestamps
    end
    add_index :survey_answers, :survey_id
    add_index :survey_answers, :survey_question_id
  end
end
