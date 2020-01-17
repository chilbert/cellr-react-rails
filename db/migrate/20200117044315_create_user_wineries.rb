class CreateUserWineries < ActiveRecord::Migration[5.0]
  def change
    create_table :user_wineries do |t|
      t.integer :user_id
      t.integer :winery_id

      t.timestamps
    end
  end
end
