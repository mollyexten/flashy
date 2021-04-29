class Entry < ApplicationRecord
  belongs_to :deck
  has_one :user, through: :deck
end
