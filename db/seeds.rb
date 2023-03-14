# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Cleaning database *scrub scrub*..."
User.destroy_all

puts "Creating our lovely users..."
user1 = User.new(email: "jess@test.com", password: "123456", first_name: "Jess", level: 0)
user1.save!

user2 = User.new(email: "kat@test.com", password: "123456", first_name: "Kat", level: 1)
user2.save!

user3 = User.new(email: "issy@test.com", password: "123456", first_name: "Issy", level: 2)
user3.save!

user4 = User.new(email: "zac@test.com", password: "123456", first_name: "Zac", level: 3)
user4.save!

user5 = User.new(email: "dilber@test.com", password: "123456", first_name: "Dilber", level: 3)
user5.save!

user6 = User.new(email: "matilda@test.com", password: "123456", first_name: "Matilda", level: 0)
user6.save!

puts "All done! Have at it!"
