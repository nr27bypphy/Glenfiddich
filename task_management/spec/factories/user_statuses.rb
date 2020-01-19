FactoryBot.define do
  factory :user_status do
    user { create(:user) }
    workspace { create(:workspace) }
  end
end
