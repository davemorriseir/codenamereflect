class LogEntryLabel < ApplicationRecord
  has_many :log_label_links
  has_many :survey_log_questions, through: :log_label_links
end
