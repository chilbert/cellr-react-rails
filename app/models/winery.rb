class Winery < ApplicationRecord

    validates :name, :location, presence: true
    validates :name, uniqueness: true


    has_many :bottles

end
