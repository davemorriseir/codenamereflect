class LogLabelLink < ApplicationRecord
  belongs_to :log_entry_label
  belongs_to :survey_log_question
end
