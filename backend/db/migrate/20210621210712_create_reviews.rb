class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :text
      t.string :name
      t.string :restaurant
      t.integer :restaurant_id
      t.integer :username_id
      t.timestamps
    end
  end
end
