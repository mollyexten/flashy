class AddAuthorColumnToDecksTable < ActiveRecord::Migration[6.1]
  def change
    add_column :decks, :author, :string
  end
end
