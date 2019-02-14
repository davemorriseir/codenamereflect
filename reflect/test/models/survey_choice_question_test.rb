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
