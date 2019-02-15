# == Schema Information
#
# Table name: survey_questions
#
#  id            :integer          not null, primary key
#  question_text :string(255)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  type          :string(255)      not null
#  options_one   :string(255)
#  options_two   :string(255)
#  options_three :string(255)
#  range_lower   :string(255)
#  range_upper   :string(255)
#  log_value     :string(255)
#  chart_label   :string(255)
#

require 'test_helper'

class SurveyChoiceQuestionTest < ActiveSupport::TestCase
  test "should not save Choice Question with invalid log params" do
    choice_q = SurveyChoiceQuestion.new(question_text: "Hello!", options_one: "test 1", options_two: "test 2", options_three: "test 3", log_value: "Test", type: "SurveyChoiceQuestion")
    assert_not choice_q.save 
  end

  test "should not save Choice Question with invalid rating params" do
    choice_q = SurveyChoiceQuestion.new(question_text: "Hello!", options_one: "test 1", options_two: "test 2", options_three: "test 3", range_lower: 1, range_upper: 2, type: "SurveyChoiceQuestion")
    assert_not choice_q.save 
  end

  test "should save Choice Question with valid choice params" do
    choice_q = SurveyChoiceQuestion.new(question_text: "Hello!", options_one: "test 1", options_two: "test 2", options_three: "test 3", type: "SurveyChoiceQuestion")
    assert choice_q.save 
  end
end
