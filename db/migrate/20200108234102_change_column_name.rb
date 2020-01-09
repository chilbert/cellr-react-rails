class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :user_bottles, :bottles_id, :bottle_id
  end
end
