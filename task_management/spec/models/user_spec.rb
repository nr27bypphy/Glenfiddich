require 'rails_helper'

RSpec.describe User, type: :model do
  describe "Validaiton" do
    subject { user }
    let(:user) { create(:user) }

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:mail) }
    it { is_expected.to validate_uniqueness_of(:mail).case_insensitive }
    it { is_expected.to validate_presence_of(:role) }
    it { is_expected.to define_enum_for(:role).with_values([:owner, :admin, :member, :guest]) }
  end
end
