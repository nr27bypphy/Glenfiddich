require 'rails_helper'

RSpec.describe Task, type: :model do
  describe "Validation" do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:project) }
  end

  describe 'Association' do
    it { is_expected.to belong_to(:project) }
    it { is_expected.to belong_to(:workspace_member) }
  end
end
