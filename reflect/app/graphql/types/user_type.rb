module Types
  class UserType < Types::BaseObject
    graphql_name "User"

    field :id, ID, null: false
    field :first_name, String, null: false
    field :surname, String, null: true
    field :email, String, null: true
  end
end
