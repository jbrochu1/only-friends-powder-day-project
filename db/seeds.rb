# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "no seeds right now"
# puts "Creating Users...🫥"
# u1 = User.create(username: 'Hana1', password: '1234', email: 'email@gmail.com', admin: false, first_name: 'Hana', last_name: 'Brochu', age: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/CatSkiing.jpg', neighborhood: 'Denver')
# u2 = User.create(username: 'JuniperTrees', password: '1234', email: 'email1@gmail.com', admin: false, first_name: 'Juniper', last_name: 'Brochu', age: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/CatSkiing.jpg', neighborhood: 'Denver')
# u3 = User.create(username: 'JSON', password: 'Kiddles', email: 'email1@gmail.com', admin: true, first_name: 'Jason', last_name: 'Brochu', age: 38, avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/CatSkiing.jpg', neighborhood: 'Denver')
# u4 = User.create(username: 'daddyshark', password: '1234', email: 'email1@gmail.com', admin: false, first_name: 'Daddy', last_name: 'Shark', age: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/CatSkiing.jpg', neighborhood: 'Denver')
# u5 = User.create(username: 'babyshark', password: '1234', email: 'email1@gmail.com', admin: false, first_name: 'Baby', last_name: 'Shark', age: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/CatSkiing.jpg', neighborhood: 'Denver')


# puts "Creating Mountains"
# m1 = Mountain.create(name: 'Vail', image: 'https://vtskiandride.com/wp-content/uploads/2020/10/AdobeStock_93918738-scaled.jpeg', elevation: 11570, ski_pass: 'epic', blackout_dates: 'Coming soon!')
# m2 = Mountain.create(name: 'Winter Park', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mary_Jane_base.JPG/640px-Mary_Jane_base.JPG', elevation: 12600, ski_pass: 'ikon', blackout_dates: 'Coming soon!')
# m3 = Mountain.create(name: 'Steamboat', image: 'https://mtn-resorts.com/external-assets/resort-town.jpg', elevation: 10568, ski_pass: 'ikon', blackout_dates: 'Coming soon!')
# m4 = Mountain.create(name: 'Breckenridge', image: 'https://brecknetwork.com/wp-content/uploads/2018/03/VailResorts_BRK6964_Jack_Affleck_HighRes-1.jpg', elevation: 12998, ski_pass: 'epic', blackout_dates: 'Coming soon!')
# m5 = Mountain.create(name: 'Beaver Creek', image: 'https://www.skisync.com/hubfs/Resort_Images/beaver-creek-5.jpg', elevation: 11440, ski_pass: 'epic', blackout_dates: 'Coming soon!')
# m6 = Mountain.create(name: 'Copper Mountain', image: 'https://cms.coppercolorado.com/sites/copper/files/inline-images/IMG_9765.jpg', elevation: 12313, ski_pass: 'ikon', blackout_dates: 'Coming soon!')


# puts "Creating Trips"
# t1 = Trip.create(user_id: u1.id, mountain_id: m1.id, trip_start: 'Tue Jan 03 2023 11:00:00 GMT-0700 (Mountain Standard Time)', trip_end: 'Wed Jan 04 2023 11:00:00 GMT-0700 (Mountain Standard Time)')
# t2 = Trip.create(user_id: u2.id, mountain_id: m2.id, trip_start: 'Thu Jan 05 2023 11:00:00 GMT-0700 (Mountain Standard Time)', trip_end: 'Fri Jan 06 2023 11:00:00 GMT-0700 (Mountain Standard Time)')

# puts "Creating UserTrips"
# ut1 = UserTrip.create(user_id: u1.id, trip_id: t1.id)
# ut2 = UserTrip.create(user_id: u2.id, trip_id: t2.id)

# # removed mtntrips
# # puts "Creating TEST MountainTrips"
# # mt1 = MountainTrip.create(mountain_id: m1.id, trip_id: t1.id)
# # mt2 = MountainTrip.create(mountain_id: m2.id, trip_id: t2.id)


# puts "Creating Comments"
# c1 = Comment.create(trip_id: 1, user_id: 1, comment: "I'm in!", date: 'December 15, 2022 11:30')
# c2 = Comment.create(trip_id: 1, user_id: 2, comment: 'Hot Chocolate?', date: 'December 15, 2022 11:30')