class CreateSurveyQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :survey_questions do |t|
      t.string :question_test

      t.timestamps
    end
  end
end
