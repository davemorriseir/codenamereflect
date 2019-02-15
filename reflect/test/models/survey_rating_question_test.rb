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

class SurveyRatingQuestionTest < ActiveSupport::TestCase
  test "should not save Rating Question with invalid choice params" do
    rating_q = SurveyRatingQuestion.new(question_text: "Hello!", range_lower: 1, range_upper: 2, options_one: "test", type: "SurveyRatingQuestion")
    assert_not rating_q.save 
  end

  test "should not save Rating Question with invalid log params" do
    rating_q = SurveyRatingQuestion.new(question_text: "Hello!", range_lower: 1, range_upper: 2, log_value: "test", type: "SurveyRatingQuestion")
    assert_not rating_q.save 
  end

  test "should save Rating Question with valid range params" do
    rating_q = SurveyRatingQuestion.new(question_text: "Hello!", range_lower: 1, range_upper: 2, type: "SurveyRatingQuestion")
    assert rating_q.save 
  end
end
