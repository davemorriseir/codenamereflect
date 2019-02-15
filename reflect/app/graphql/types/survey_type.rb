module Types
  class SurveyType < Types::BaseObject
    graphql_name "Survey"
    description "Represents the Surveys in the database"

    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :survey_type, String, null: true
    field :survey_sections, [SurveySectionType], null: true 
    field :created_at, String, null: false
    field :updated_at, String, null: false

    def survey_sections
      Survey.find(self.id).survey_sections
    end
  end
end
