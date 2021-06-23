Restaurant.delete_all
Review.delete_all
Username.delete_all

 r1 = Restaurant.create(name: "Tony's")
 r2 = Restaurant.create(name: "The Gilded Cow")
 r3 = Restaurant.create(name: "Los Pollos Hermonos")

 andy = Username.create(name: "andyhatesyou")
 sam = Username.create(name: "samalwaysonadiet")
 jon = Username.create(name: "joneatseverything")

 Review.create(text: "best pizza in town", username_id: jon.id, restaurant_id: r1.id)
 Review.create(text: "terrible service", username_id: andy.id, restaurant_id: r2.id)
 Review.create(text: "shaddy people run this place", username_id: andy.id, restaurant_id: r3.id)
 Review.create(text: "I left hungry!!", username_id: sam.id, restaurant_id: r2.id)
 Review.create(text: "the best chicken I've ever had", username_id: jon.id, restaurant_id: r3.id)

 
 
 puts "Seeded the database"

