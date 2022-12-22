# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_16_221456) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "trip_id", null: false
    t.bigint "user_id", null: false
    t.text "comment"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_comments_on_trip_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "mountains", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "image"
    t.integer "elevation"
    t.string "ski_pass"
    t.string "blackout_dates"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trips", force: :cascade do |t|
    t.bigint "mountain_id", null: false
    t.bigint "user_id", null: false
    t.datetime "trip_start"
    t.datetime "trip_end"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mountain_id"], name: "index_trips_on_mountain_id"
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "user_trips", force: :cascade do |t|
    t.bigint "trip_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_user_trips_on_trip_id"
    t.index ["user_id"], name: "index_user_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.boolean "admin"
    t.string "first_name"
    t.string "last_name"
    t.integer "age"
    t.string "avatar"
    t.string "neighborhood"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "comments", "trips"
  add_foreign_key "comments", "users"
  add_foreign_key "trips", "mountains"
  add_foreign_key "trips", "users"
  add_foreign_key "user_trips", "trips"
  add_foreign_key "user_trips", "users"
end
