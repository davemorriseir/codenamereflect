import gql from 'graphql-tag'

export const SURVEYS_QUERY = gql`
  {
    surveys {
      id
      name
      description
      surveyType
      createdAt
      updatedAt
      surveySections {
        id
        name
        description
        position
        surveyQuestions {
          id
          questionText
          type
        }
      }
    }
  }
`

export const SURVEY_QUERY = gql`
  query survey($id: ID!) {
    survey(id: $id) {
      id
      name
      description
      surveyType
      createdAt
      updatedAt
      surveySections {
        id
        title
        description
        position
        surveyId
        surveyQuestions {
          id
          questionText
          type
          rangeUpper
          rangeLower
          optionsOne
          optionsTwo
          optionsThree
        }
      }
    }
  }
`

export const CREATE_SURVEY_ANSWER = gql`
  mutation CreateSurveyAnswer(
    $surveyId: ID!
    $surveyQuestionId: ID!
    $value: String!
    $answerType: String!
  ) {
    createSurveyAnswer(
      surveyId: $surveyId
      surveyQuestionId: $surveyQuestionId
      value: $value
      answerType: $answerType
    ) {
      surveyId
      surveyQuestionId
      value
      id
    }
  }
`
