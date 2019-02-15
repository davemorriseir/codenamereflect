module Types
  class SurveySectionType < Types::BaseObject
    graphql_name "SurveySection"

    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :title, String, null: true
    field :position, Int, null: true
    field :survey_id, ID, null: true
    field :survey_questions, [SurveyQuestionType], null: true
    field :created_at, String, null: false
    field :updated_at, String, null: false

    def survey_questions 
      SurveySection.find(self.id).survey_questions
    end
  end
end