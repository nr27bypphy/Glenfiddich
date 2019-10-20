class User < ApplicationRecord
  has_secure_password validations: true

  validate :name, presence: true
  validate :mail, presence: true, uniqueness: true
end
