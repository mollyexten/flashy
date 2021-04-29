class Entry < ApplicationRecord
  belongs_to :deck
  one_one :user, through: :deck
end
