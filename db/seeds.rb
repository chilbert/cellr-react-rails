# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Create Wineries 

User.destroy_all
Winery.destroy_all
Bottle.destroy_all
UserBottle.destroy_all
UserWinery.destroy_all


User.create(name: "Chase Hilbert", email: "chase@chasehilbert.com")

Winery.create(name: "Franklin", location: "California")
Winery.create(name: "Momentum", location: "California")
Winery.create(name: "Cade", location: "California")
Winery.create(name: "Penfolds", location: "Australia")
Winery.create(name: "Layer Cake", location: "Italy")

# Bottle.create(name: "Cabernet", vintage: "2016", variety: "Red", bottle_count: "4" , winery_id: "1")
# Bottle.create(name: "Momementum Reserver", vintage: "2016", variety: "Red", bottle_count: "8" , winery_id: "2")
# Bottle.create(name: "Cade Cabernet", vintage: "2016", variety: "Red", bottle_count: "6" , winery_id: "3")
# Bottle.create(name: "Pinot Noir", vintage: "2012", variety: "Red", bottle_count: "4" , winery_id: "1")
# Bottle.create(name: "Merlot", vintage: "2005", variety: "Red", bottle_count: "3" , winery_id: "2")
# Bottle.create(name: "Pinot Noir", vintage: "2012", variety: "Red", bottle_count: "5" , winery_id: "3")

UserWinery.create(user_id: "1", winery_id: "1")
UserWinery.create(user_id: "1", winery_id: "2")
UserWinery.create(user_id: "1", winery_id: "4")