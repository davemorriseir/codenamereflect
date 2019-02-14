class SurveyChoiceQuestion < SurveyQuestion
  validate :validate_params

  def validate_params
    if self.has_rating_params? || self.has_log_params?
      errors.add(:id, 'Invalid params, Choice Question can only contain options.')
    end
  end
end