class ChangeColumnNamesForSectionQuestionRelationship < ActiveRecord::Migration[5.0]
  def change
    rename_column :survey_section_questions, :question_id, :survey_question_id
    rename_column :survey_section_questions, :section_id, :survey_section_id
  end
end
