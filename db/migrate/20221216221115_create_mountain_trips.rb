class CreateMountainTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :mountain_trips do |t|
      t.references :trip, null: false, foreign_key: true
      t.references :mountain, null: false, foreign_key: true

      t.timestamps
    end
  end
end
