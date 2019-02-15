# == Schema Information
#
# Table name: survey_questions
#
#  id            :integer          not null, primary key
#  question_text :string(255)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  type          :string(255)      not null
#  options_one   :string(255)
#  options_two   :string(255)
#  options_three :string(255)
#  range_lower   :string(255)
#  range_upper   :string(255)
#  log_value     :string(255)
#  chart_label   :string(255)
#

class SurveyQuestion < ApplicationRecord
  has_many :survey_section_questions
  has_many :survey_sections, through: :survey_section_questions
  has_many :survey_answers

  def has_choice_params?
    self.options_one.present? || self.options_two.present? || self.options_three.present?
  end

  def has_log_params?
    self.log_value.present?
  end

  def has_rating_params?
    self.range_upper.present? || self.range_lower.present?
  end
end
