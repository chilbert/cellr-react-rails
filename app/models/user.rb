class User < ApplicationRecord

    validates :email, uniqueness: true

    has_many :user_bottles, :dependent => :destroy
    has_many :wineries
end
