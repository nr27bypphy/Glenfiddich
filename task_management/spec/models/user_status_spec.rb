require 'rails_helper'

RSpec.describe UserStatus, type: :model do
  describe 'Validaiton' do
    it { is_expected.to validate_presence_of(:user) }
    it { is_expected.to validate_presence_of(:workspace) }

    context 'uniqueness validation' do
      subject { dup_user_status.valid? }
      let(:user_status) { create(:user_status) }
      let(:dup_user_status) { user_status.dup }

      context 'when workspace and user are same' do
        it { is_expected.to eq false }
      end

      context 'when user are not same' do
        before { dup_user_status.user = create(:user) }

        it { is_expected.to eq true }
      end

      context 'when workspace are not same' do
        before { dup_user_status.workspace = create(:workspace) }

        it { is_expected.to eq true }
      end
    end
  end

  describe 'Associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:workspace) }
  end
end
