class SurveySectionQuestion < ApplicationRecord
  belongs_to :survey_question
  belongs_to :survey_section
end
