FactoryBot.define do
  factory :workspace_member do
    workspace { create(:workspace) }
    user { create(:user) }
    role { :owner }
  end
end
