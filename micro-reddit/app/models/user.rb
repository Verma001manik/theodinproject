class User < ApplicationRecord
    has_many :posts
    validates :username, presence: true , length:{ minimum: 4}
    validates :email , presence: true 
    validates :password , presence: true , length:{ minimum: 6}


end
