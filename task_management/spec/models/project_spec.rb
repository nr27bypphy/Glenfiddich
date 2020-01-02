require 'rails_helper'

RSpec.describe Project, type: :model do
  describe "Validation" do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:workspace) }
  end

  describe 'Association' do
    it { is_expected.to have_many(:tasks) }
    it { is_expected.to belong_to(:workspace) }
    it { is_expected.to belong_to(:workspace_member) }
  end
end
