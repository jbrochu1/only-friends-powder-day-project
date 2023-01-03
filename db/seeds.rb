# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# u1 = User.create(username: '', password: '', email: '', admin: false, first_name: '', last_name: '', age: '', avatar: '', neighborhood: '')
puts "Creating TEST Users...🫥"
u1 = User.create(username: 'test', password: '1234', email: 'email@gmail.com', admin: false, first_name: 'test1f', last_name: 'test1l', age: 25, avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/CatSkiing.jpg', neighborhood: 'Rino')
u2 = User.create(username: 'test2', password: '1234', email: 'email1@gmail.com', admin: false, first_name: 'test2f', last_name: 'test2l', age: 25, avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/CatSkiing.jpg', neighborhood: 'LoHi')

# m1 = Mountain.create(name: '', address: '', image: '', elevation: '', ski_pass: '', blackout_dates: '')
puts "Creating TEST Mountains"
m1 = Mountain.create(name: 'mountain1', address: 'address 1', image: 'abc', elevation: 8000, ski_pass: 'abc', blackout_dates: '123')
m2 = Mountain.create(name: 'mountain2', address: 'address 2', image: 'abc', elevation: 9000, ski_pass: 'abc', blackout_dates: '123')

# t1 = Trip.create(mountain_id: '', user_id: '', trip_start: '', trip_end: '')
puts "Creating TEST Trips"
t1 = Trip.create(user_id: u1.id, mountain_id: m1.id, trip_start: '2022-10-15T11:30-07:00', trip_end: '2022-11-15T11:30-07:00')
t2 = Trip.create(user_id: u2.id, mountain_id: m2.id, trip_start: '2022-10-10T11:30-07:00', trip_end: '2022-11-10T11:30-07:00')

puts "Creating TEST UserTrips"
ut1 = UserTrip.create(user_id: u1.id, trip_id: t1.id)
ut2 = UserTrip.create(user_id: u1.id, trip_id: t2.id)

# puts "Creating TEST MountainTrips"
# mt1 = MountainTrip.create(mountain_id: m1.id, trip_id: t1.id)
# mt2 = MountainTrip.create(mountain_id: m2.id, trip_id: t2.id)

# c1 = Comment.create(trip_id: '', user_id: '', comment: '', date: '')
puts "Creating TEST Comments"
c1 = Comment.create(trip_id: 1, user_id: 1, comment: 'hello!', date: 'December 15, 2022 11:30')
c2 = Comment.create(trip_id: 1, user_id: 1, comment: 'hello!', date: 'December 15, 2022 11:30')