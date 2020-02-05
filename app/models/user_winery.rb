class UserWinery < ApplicationRecord

    validates :winery_id, uniqueness: true
    
    belongs_to :user
    belongs_to :winery
end
