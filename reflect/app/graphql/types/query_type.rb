module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :users, [UserType], null: false
    field :user, UserType, null: false do
      argument :id, ID, required: true
    end

    def users
      User.all
    end

    def user(id: nil)
      if id
        User.find(id)
      else
        raise ArgumentError.new "No ID passed to user query"
      end
    end
  end
end
