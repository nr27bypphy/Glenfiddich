FactoryBot.define do
  factory :user do
    name { 'eto yusuke' }
    sequence(:mail) { |n| "sample_#{n}@sample.com" }
    password { 'password' }
  end
end
