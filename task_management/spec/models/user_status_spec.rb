require 'rails_helper'

RSpec.describe UserStatus, type: :model do
  describe 'Validaiton' do
    subject { user_status }
    let(:user_status) { create(:user_status) }

    it { is_expected.to validate_presence_of(:user) }
    it { is_expected.to validate_presence_of(:workspace) }
    it { is_expected.to validate_uniqueness_of(:user) }
  end

  describe 'Associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:workspace) }
  end
end
