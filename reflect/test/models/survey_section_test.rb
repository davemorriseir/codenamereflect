# == Schema Information
#
# Table name: survey_sections
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  description :string(255)
#  title       :string(255)
#  position    :integer
#  survey_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class SurveySectionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
