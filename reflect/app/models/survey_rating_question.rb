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

class SurveyRatingQuestion < SurveyQuestion
  validate :validate_params

  def validate_params
    if self.has_log_params? || self.has_choice_params?
      errors.add(:id, 'Invalid params, Rating questions can only contain range values.')
    end
  end
end
