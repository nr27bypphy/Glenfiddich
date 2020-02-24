FactoryBot.define do
  factory :project do
    title { 'タイトル' }
    description { 'ディスクリプション' }
    deadline { Time.zone.now }
    workspace { create(:workspace) }
  end
end
