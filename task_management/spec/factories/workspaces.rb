FactoryBot.define do
  factory :workspace do
    sequence(:name) { |n| "workspace_#{n}" }
  end
end
