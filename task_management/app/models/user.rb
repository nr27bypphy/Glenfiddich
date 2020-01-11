class User < ApplicationRecord
  attr_accessor :remember_token
  enum role: { owner: 0, admin: 1, member: 2, guest: 3 }
  EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  has_many :projects
  has_many :workspace_members

  has_one :user_status

  before_save { self.email = email.downcase }
  validates :name, presence: true
  validates :email, presence: true, length: { maximum: 255 }, format: { with: EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :role, presence: true

  has_secure_password validations: true

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

  # 表示する workspace
  def current_workspace
    user_status&.workspace
  end

  # 表示する workspace_member
  def current_workspace_member
    workspace_members.find_by(workspace: current_workspace)
  end
end
