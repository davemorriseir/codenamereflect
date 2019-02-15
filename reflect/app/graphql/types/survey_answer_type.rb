module Types
  class SurveyAnswerType < Types::BaseObject
    graphql_name "SurveyAnswer"
    description "Represents the survey answer in the database"

    field :id, ID, null: false
    field :survey_id, ID, null: false
    field :survey_question_id, ID, null: false
    field :value, String, null: false
    field :answer_type, String, null: false
    field :created_at, String, null: false
    field :updated_at, String, null: false
  end
end