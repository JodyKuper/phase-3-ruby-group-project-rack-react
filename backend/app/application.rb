require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]

    elsif req.path.match(/restaurants/)
      if req.env["REQUEST_METHOD"] == "GET"
        if req.path.split("/restaurants").length == 0 
          restaurants = Restaurant.all
          return [200, {'Content-Type' => 'application/json'}, [restaurants.to_json]]       
        else
          restaurant_id = req.path.split("/restaurants/")[1].to_i
          found_restaurant = Restaurant.find_by(id: restaurant_id)
          return [200, {'Content-Type' => 'application/json'}, [found_restaurant.to_json]] 
        end
      elsif req.env["REQUEST_METHOD"] == "POST"
        form_data = JSON.parse(req.body.read) 
        new_restaurant = Restaurant.create(name: form_data["restaurant"])
        return [200, {'Content-Type' => 'application/json'}, [new_restaurant.to_json]] 
      
      elsif req.env["REQUEST_METHOD"] == "DELETE"
     

        id = req.path.split("/restaurants/").last
        Restaurant.find(id).delete
        return[200, { 'Content-Type' => 'application/json'}, [{:message => "Restaurant deleted"}.to_json]]
      end  
      
    elsif req.path.match(/usernames/)
      if req.env["REQUEST_METHOD"] == "GET"
        if req.path.split("/usernames").length == 0 
          usernames = Username.all
          return [200, {'Content-Type' => 'application/json'}, [usernames.to_json]]       
        else
           username_id = req.path.split("/usernames/")[1].to_i
          found_username = Username.find_by(id: username_id)
          return [200, {'Content-Type' => 'application/json'}, [found_username.to_json]] 
        end
      elsif req.env["REQUEST_METHOD"] == "POST"
        form_data = JSON.parse(req.body.read) 
        new_username = Username.create(name: form_data["name"])
        return [200, {'Content-Type' => 'application/json'}, [new_username.to_json]
        ] 
      elsif req.env["REQUEST_METHOD"] == "DELETE"
        #  binding.pry
          id = req.path.split("/usernames/").last
          Username.find(id).delete
          return[200, { 'Content-Type' => 'application/json'}, [{:message => "Username deleted"}.to_json]]      
      end  

    elsif req.path.match(/reviews/)
      if req.env["REQUEST_METHOD"] == "GET"
        if req.path.split("/reviews").length == 0 
          reviews = Review.all
          return [200, {'Content-Type' => 'application/json'}, [reviews.to_json]]       
        else
           review_id = req.path.split("/reviews/")[1].to_i
          found_review = Review.find_by(id: review_id)
          return [200, {'Content-Type' => 'application/json'}, [found_review.to_json]] 
        end
      elsif req.env["REQUEST_METHOD"] == "POST"
        form_data = JSON.parse(req.body.read)
        # binding.pry
        new_review = Review.create(text: form_data["review"], username_id: form_data["newUser"]["id"], restaurant_id: form_data["newRestaurant"]["id"])
        return [200, {'Content-Type' => 'application/json'}, [new_review.to_json]]
      elsif req.env["REQUEST_METHOD"] == "DELETE"
        #  binding.pry
          id = req.path.split("/reviews/").last
          Review.find(id).delete
          return[200, { 'Content-Type' => 'application/json'}, [{:message => "Review deleted"}.to_json]]
        
      end  
    



    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
