class User < ApplicationRecord

    validates :email, uniqueness: true


    has_many :user_wineries
    has_many :wineries, through: :user_wineries
end
