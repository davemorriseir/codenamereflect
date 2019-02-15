module Types
  class SurveyQuestionType < Types::BaseObject
    graphql_name "SurveyQuestion"
    description "Represents the survey questions in the database"

    field :id, ID, null: false
    field :question_text, String, null: false
    field :type, String, null: false
    field :options_one, String, null: true
    field :options_two, String, null: true
    field :options_three, String, null: true
    field :range_lower, Int, null: true
    field :range_upper, Int, null: true
    field :log_value, String, null: true
    field :created_at, String, null: false
    field :updated_at, String, null: false
  end
end