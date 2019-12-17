class User < ApplicationRecord
  attr_accessor :remember_token

  has_secure_password validations: true

  has_many :projects

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :role, presence: true
  before_destroy :destroyable_user?

  enum role: { owner: 0, admin: 1, normal: 2, guest: 3 }

  def self.new_remember_token
    SecureRandom.urlsafe_base64
  end

  # digest 値を作成
  def self.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  # remember_token を生成し、ハッシュ化したものを remember_digest に保存しておく
  def remember
    self.remember_token = User.new_remember_token
    update_columns(remember_digest: User.digest(remember_token))
  end

  # digest 値が 存在する token の hash 値かを検証する
  def authenticated?(attribute, token)
    digest = send("#{attribute}_digest")
    return false if digest.nil?

    BCrypt::Password.new(digest).is_password?(token)
  end

  # ログアウト処理で使用 remember_token の hash 値を nil に更新する
  def forget
    update_columns(remember_digest: nil)
  end

  def destroyable_user?
    return if owner?

    errors.add(base: 'オーナー以外はメンバーの削除は出来ません')
    throw :abort
  end
end
