class User < ApplicationRecord

    validates :email, uniqueness: true

    has_many :user_bottles, :dependent => :destroy
end
