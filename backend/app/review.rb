class Review < ActiveRecord::Base
	belongs_to :username
	belongs_to :restaurant
	
end