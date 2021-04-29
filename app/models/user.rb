class User < ApplicationRecord
  # Takes value of password, hashes it for us, and stores it as password_digest
  has_secure_password
  has_many :decks, dependent: :destroy
  has_many :entries, through: :decks, :source => :user
  
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: { minimum: 6 }

end
