class UserBottle < ApplicationRecord

    belongs_to :user
    belongs_to :bottle
    belongs_to :winery
    
end
