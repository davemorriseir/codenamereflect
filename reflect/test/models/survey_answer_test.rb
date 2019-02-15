# == Schema Information
#
# Table name: survey_answers
#
#  id                 :integer          not null, primary key
#  survey_id          :integer
#  survey_question_id :integer
#  value              :string(255)
#  answer_type        :string(255)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'test_helper'

class SurveyAnswerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
