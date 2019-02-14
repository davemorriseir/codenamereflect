# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190214210649) do

  create_table "survey_questions", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "question_text"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "survey_section_questions", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "survey_question_id"
    t.integer  "survey_section_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["survey_question_id"], name: "index_survey_section_questions_on_survey_question_id", using: :btree
    t.index ["survey_section_id"], name: "index_survey_section_questions_on_survey_section_id", using: :btree
  end

  create_table "survey_sections", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "description"
    t.string   "title"
    t.integer  "position"
    t.integer  "survey_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["survey_id"], name: "index_survey_sections_on_survey_id", using: :btree
  end

  create_table "surveys", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "description"
    t.string   "type"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "first_name"
    t.string   "surname"
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
