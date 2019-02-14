class AddQuestionAttributesToSurveyQuestionModel < ActiveRecord::Migration[5.0]
  def change
    add_column :survey_questions, :type, :string, null: false
    add_column :survey_questions, :options_one, :string
    add_column :survey_questions, :options_two, :string
    add_column :survey_questions, :options_three, :string
    add_column :survey_questions, :range_lower, :string
    add_column :survey_questions, :range_upper, :string
    add_column :survey_questions, :log_value, :string
    add_column :survey_questions, :chart_label, :string
  end
end
