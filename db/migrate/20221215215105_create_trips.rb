class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :mountain, null: false, foreign_key: true
      t.datetime :trip_start
      t.datetime :trip_end

      t.timestamps
    end
  end
end
