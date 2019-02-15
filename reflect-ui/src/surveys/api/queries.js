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
