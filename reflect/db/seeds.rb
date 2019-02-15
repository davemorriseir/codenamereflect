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



