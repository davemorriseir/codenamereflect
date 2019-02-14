class SurveyRatingQuestion < SurveyQuestion
  validate :validate_params

  def validate_params
    if self.has_log_params? || self.has_choice_params?
      errors.add(:id, 'Invalid params, Rating questions can only contain range values.')
    end
  end
end