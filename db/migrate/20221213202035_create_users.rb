class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.boolean :admin
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :avatar
      t.string :neighborhood

      t.timestamps
    end
  end
end
  