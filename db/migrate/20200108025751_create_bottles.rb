class CreateBottles < ActiveRecord::Migration[5.0]
  def change
    create_table :bottles do |t|
      t.string :name
      t.integer :vintage
      t.string :variety
      t.integer :bottle_count

      t.timestamps
    end
  end
end
