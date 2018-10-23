class Room < ApplicationRecord

  def self.dropdown
    Room.find_by_sql ["
      SELECT
        id,
        name as value,
        name as text
      FROM rooms
      "]
  end

end
