class SurveyLogQuestion < SurveyQuestion
  validate :validate_params

  def validate_params
    if self.has_rating_params? || self.has_choice_params?
      errors.add(:id, 'Invalid params, Logs can only contain log values.')
    end
  end
end