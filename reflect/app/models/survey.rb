# == Schema Information
#
# Table name: surveys
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  description :string(255)
#  survey_type :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Survey < ApplicationRecord
  has_many :survey_sections
  has_many :survey_answers
end
