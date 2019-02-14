class CreateSurveySections < ActiveRecord::Migration[5.0]
  def change
    create_table :survey_sections do |t|
      t.string :name
      t.string :description
      t.string :title
      t.integer :position
      t.integer :survey_id

      t.timestamps
    end

    add_index :survey_sections, :survey_id
  end
end
