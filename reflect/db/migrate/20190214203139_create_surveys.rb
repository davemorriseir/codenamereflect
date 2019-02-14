class CreateSurveys < ActiveRecord::Migration[5.0]
  def change
    create_table :surveys do |t|
      t.string :name
      t.string :description
      t.string :type

      t.timestamps
    end
  end
end
