FactoryBot.define do
  factory :user do
    name { 'eto yusuke' }
    sequence(:email) { |n| "sample_#{n}@sample.com" }
    password { 'password' }
  end
end
