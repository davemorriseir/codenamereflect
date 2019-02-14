class SurveyQuestion < ApplicationRecord
  has_many :survey_section_questions
  has_many :survey_sections, through: :survey_section_questions

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
