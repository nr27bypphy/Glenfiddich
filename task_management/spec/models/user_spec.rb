require 'rails_helper'

RSpec.describe User, type: :model do
  describe "Validaiton" do
    subject { user }
    let(:user) { create(:user) }

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
    it { is_expected.to validate_presence_of(:role) }
    it { is_expected.to define_enum_for(:role).with_values([:owner, :admin, :member, :guest]) }
  end

  describe 'Associations' do
    it { is_expected.to have_many(:workspace_members) }
    it { is_expected.to have_one(:user_status) }
  end

  describe '#current_workspace' do
    subject { user.current_workspace }

    context 'when user_status exist' do
      let(:user_status) { create(:user_status) }
      let(:user) { user_status.user }
      let(:workspace) { user_status.workspace }

      it { is_expected.to eq workspace }
    end

    context 'when user_status does not exist' do
      let(:workspace_member) { create(:workspace_member) }
      let(:user) { workspace_member.user }
      let(:workspace) { workspace_member.workspace }

      it { is_expected.to eq nil }
    end
  end

  describe '#currnt_workspace_member' do
    subject { user.current_workspace_member }

    context 'when current_workspace exist' do
      let(:workspace_member) { create(:workspace_member) }
      let(:user) { workspace_member.user }
      let(:workspace) { workspace_member.workspace }
      before { create(:user_status, user: user, workspace: workspace) }


      it { is_expected.to eq workspace_member }
    end

    context 'when current_workspace done not exist' do
      let(:workspace_member) { create(:workspace_member) }
      let(:user) { workspace_member.user }

      it { is_expected.to eq nil }
    end

    context 'when workspace_members does not exist' do
      let(:user_status) { create(:user_status) }
      let(:user) { user_status.user }
      let(:workspace) { user_status.workspace }

      it { is_expected.to eq nil }
    end
  end
end
