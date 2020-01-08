class Bottle < ApplicationRecord
    
    validates :name, :variety, :vintage, presence: true

    belongs_to :winery
    has_many :user_bottles
end
