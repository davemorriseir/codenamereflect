# == Schema Information
#
# Table name: survey_section_questions
#
#  id                 :integer          not null, primary key
#  survey_question_id :integer
#  survey_section_id  :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class SurveySectionQuestion < ApplicationRecord
  belongs_to :survey_question
  belongs_to :survey_section
end
