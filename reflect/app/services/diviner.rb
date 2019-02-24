require "google/cloud/language"

class Diviner
  def initialize
    @language_client = Google::Cloud::Language.new
  end

  def divine_text(log_entry) 
    response = divine_entities_and_sentiment(log_entry.log_value)

    response.to_json
  end

  def conjure_labels()

  def divine_entities_and_sentiment(log_text)
    @language_client.analyze_entity_sentiment content: log_text, type: :PLAIN_TEXT
  end
end