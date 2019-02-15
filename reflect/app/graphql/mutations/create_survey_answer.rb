module Mutations
  class CreateSurveyAnswer < GraphQL::Schema::Mutation
    argument :survey_id, ID, required: true
    argument :survey_question_id, ID, required: true
    argument :value, String, required: true
    argument :answer_type, String, required: true

    type Types::SurveyAnswerType

    def resolve(survey_id: nil, survey_question_id: nil, value: nil, answer_type: nil)
      SurveyAnswer.create!(
        survey_id: survey_id,
        survey_question_id: survey_question_id,
        value: value,
        answer_type: answer_type
      )
    end
  end
end