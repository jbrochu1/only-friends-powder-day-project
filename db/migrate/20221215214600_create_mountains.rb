class CreateMountains < ActiveRecord::Migration[7.0]
  def change
    create_table :mountains do |t|
      t.string :name
      t.string :address
      t.string :image
      t.integer :elevation
      t.boolean :kid_friendly
      t.string :ski_pass
      t.string :blackout_dates

      t.timestamps
    end
  end
end
