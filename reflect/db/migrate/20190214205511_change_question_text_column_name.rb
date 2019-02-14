class ChangeQuestionTextColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :survey_questions, :question_test, :question_text
  end
end
