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
