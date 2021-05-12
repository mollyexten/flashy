class RenamePublicColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :decks, :public, :publicDeck
  end
end
