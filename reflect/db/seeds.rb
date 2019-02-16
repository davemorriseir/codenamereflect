# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creatin Users"
User.create(
  first_name: 'Dave',
  surname: 'Morris',
  email: 'dave@davemorris.io'
)

User.create(
  first_name: 'Jenny',
  surname: 'Ring',
  email: 'jenny@jenny.org'
)

puts "Creating Surveys"
survey_one = Survey.create(name: "How are you feeling today?", description: "Just checking in...", survey_type: "daily")
survey_two = Survey.create(name: "How is your diet?", description: "Just checking in...", survey_type: "daily")
survey_three = Survey.create(name: "Tell me about yourself?", description: "Just checking in...", survey_type: "daily")

puts "Creating Survey Sections"
survey_section_one = survey_two.survey_sections.create(name: "Section A", description: "Just an intro", title: "Welcome", position: 0)
survey_section_two = survey_one.survey_sections.create(name: "Section 1", description: "Just an intro", title: "Welcome", position: 0)
survey_section_three = survey_two.survey_sections.create(name: "Section B", description: "Now dig!", title: "And then...?", position: 1)
survey_section_four = survey_one.survey_sections.create(name: "Section 2", description: "Now dig!", title: "And then...?", position: 1)
survey_section_five = survey_three.survey_sections.create(name: "Section ?", description: "Just an intro", title: "Welcome", position: 0)

puts "Creating Survey Questions"
survey_section_one.survey_questions.create(question_text: "Tell me about your day", type: "SurveyLogQuestion", log_value: "Well...")
survey_section_one.survey_questions.create(question_text: "What did you do?" , type: "SurveyChoiceQuestion", options_one: "I ran", options_two: "With great intensity", options_three: "Opportunity")
survey_section_one.survey_questions.create(question_text: "What did you do?" , type: "SurveyRatingQuestion", range_lower: 1, range_upper: 10)
survey_section_two.survey_questions.create(question_text: "Tell me about your day", type: "SurveyLogQuestion", log_value: "Well...")
survey_section_two.survey_questions.create(question_text: "What did you do?" , type: "SurveyChoiceQuestion", options_one: "I ran", options_two: "With great intensity", options_three: "Opportunity")
survey_section_two.survey_questions.create(question_text: "What did you do?" , type: "SurveyRatingQuestion", range_lower: 1, range_upper: 10)
survey_section_five.survey_questions.create(question_text: "Tell me about your day", type: "SurveyLogQuestion", log_value: "Well...")
survey_section_five.survey_questions.create(question_text: "What did you do?" , type: "SurveyChoiceQuestion", options_one: "I ran", options_two: "With great intensity", options_three: "Opportunity")
survey_section_three.survey_questions.create(question_text: "What did you do?" , type: "SurveyRatingQuestion", range_lower: 1, range_upper: 10)
survey_section_three.survey_questions.create(question_text: "Tell me about your day", type: "SurveyLogQuestion", log_value: "Well...")
survey_section_three.survey_questions.create(question_text: "What did you do?" , type: "SurveyChoiceQuestion", options_one: "I ran", options_two: "With great intensity", options_three: "Opportunity")
survey_section_four.survey_questions.create(question_text: "What did you do?" , type: "SurveyRatingQuestion", range_lower: 1, range_upper: 10)


puts "Creating Real Survey"
real_demo_survey = Survey.create(
  name: "Your Daily Check-In",
  description: "Don't sweat it! We just want to check in with you for two minutes every day to find out how you're feeling. This will be a simple list of questions, and will mostly be multiple choice. Try not to think to much about it :)",
  survey_type: "daily"
)

puts "RealSurveyID: #{real_demo_survey.id}"
puts "Creating Survey Sections"
real_section_one = real_demo_survey.survey_sections.create(
  name: "Step1", 
  title: "Tell me about your day",
  description: "How have you been? Sleep, Diet, and Physical activity can have a massive influence on how you feel!",
  position: 0  
)
real_section_two = real_demo_survey.survey_sections.create(
  name: "Step2", 
  title: "Now let's rate your emotions and feelings...",
  description: "We all go through many different emotions during the day and it's important to be conscious of what we're feeling. Rate, out of one to ten, the different emotions presented to you.",
  position: 0  
)
real_section_three = real_demo_survey.survey_sections.create(
  name: "Step3", 
  title: "In your own words...",
  description: "Nobody can put it better than you! Write, in your own words, how you feel today went. We'll do our best to analyze the text and raise commong points of discomfort or happiness.",
  position: 0  
)

real_section_one.survey_questions.create(question_text: "How did you sleep last night?" , type: "SurveyChoiceQuestion", options_one: "I slept pretty well!", options_two: "It was ok, could have been better", options_three: "Barely got a wink")
real_section_one.survey_questions.create(question_text: "How was your diet today?" , type: "SurveyChoiceQuestion", options_one: "Excellent!", options_two: "Could have eaten better, but not too bad", options_three: "Needed more nutrients")
real_section_one.survey_questions.create(question_text: "How physical were you today?" , type: "SurveyChoiceQuestion", options_one: "Very physical!", options_two: "Could have done more", options_three: "I barely moved")

real_section_two.survey_questions.create(question_text: "How Angry were you today?" , type: "SurveyRatingQuestion")
real_section_two.survey_questions.create(question_text: "How Sad were you today?" , type: "SurveyRatingQuestion")
real_section_two.survey_questions.create(question_text: "How Motivated did you feel today?" , type: "SurveyRatingQuestion")
real_section_two.survey_questions.create(question_text: "How Disciplined did you feel today?" , type: "SurveyRatingQuestion")
real_section_two.survey_questions.create(question_text: "How Sensitive were you today?" , type: "SurveyRatingQuestion")
real_section_two.survey_questions.create(question_text: "How Happy were you today?" , type: "SurveyRatingQuestion")
real_section_two.survey_questions.create(question_text: "How much Energy did you have today?" , type: "SurveyRatingQuestion")

real_section_three.survey_questions.create(question_text: "Let it all out!", type: "SurveyLogQuestion")







