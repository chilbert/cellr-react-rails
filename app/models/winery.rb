class Winery < ApplicationRecord

    validates :name, :location, presence: true
    validates :name, uniqueness: true


    has_many :bottles, :dependent => :destroy
    has_many :user_wineries
    has_many :users, through: :user_wineries


end
