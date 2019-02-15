# == Schema Information
#
# Table name: survey_sections
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  description :string(255)
#  title       :string(255)
#  position    :integer
#  survey_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class SurveySection < ApplicationRecord
  belongs_to :survey
  has_many :survey_section_questions
  has_many :survey_questions, through: :survey_section_questions
end
