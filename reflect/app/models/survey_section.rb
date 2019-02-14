class SurveySection < ApplicationRecord
  belongs_to :survey
  has_many :survey_section_questions
  has_many :survey_questions, through: :survey_section_questions
end
