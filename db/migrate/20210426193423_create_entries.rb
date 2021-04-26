class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.string :term
      t.text :details
      t.references :deck, null: false, foreign_key: true

      t.timestamps
    end
  end
end
