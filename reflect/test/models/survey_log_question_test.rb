require 'test_helper'

class SurveyLogQuestionTest < ActiveSupport::TestCase
  test "should not save Log Question with invalid range params" do
    log_q = SurveyLogQuestion.new(question_text: "Hello!", log_value: "Test", range_upper: 2, type: "SurveyLogQuestion")
    assert_not log_q.save 
  end

  test "should not save Log Question with invalid choice params" do
    log_q = SurveyLogQuestion.new(question_text: "Hello!", log_value: "Test", options_one: "test", type: "SurveyLogQuestion")
    assert_not log_q.save 
  end

  test "should save Log Question with valid range params" do
    log_q = SurveyLogQuestion.new(question_text: "Hello!", log_value: "Test", type: "SurveyLogQuestion")
    assert log_q.save 
  end
end
