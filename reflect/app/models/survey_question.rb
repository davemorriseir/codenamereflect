class SurveyQuestion < ApplicationRecord
  has_many :survey_section_questions
  has_many :survey_sections, through: :survey_section_questions
end
