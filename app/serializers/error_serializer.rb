module ErrorSerializer
  def self.serialize(record)
    record.errors.messages.map do |field, errors| 
      errors.map do |error_message| 
        {
          status: 422,
          source: { pointer: "/data/attributes/#{field}"},
          detail: error_messaege
        }
      end
    end.flatten
  end
end
