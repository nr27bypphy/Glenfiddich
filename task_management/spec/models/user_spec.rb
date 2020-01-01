require 'rails_helper'

RSpec.describe User, type: :model do
  describe "Validaiton" do
    subject { user }
    let(:user) { create(:user) }

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
    it { is_expected.to validate_presence_of(:role) }
    it { is_expected.to define_enum_for(:role).with_values([:owner, :admin, :normal, :guest]) }
  end

  describe 'Associations' do
    it { is_expected.to have_many(:workspace_members) }
    it { is_expected.to have_one(:user_status) }
  end
end
