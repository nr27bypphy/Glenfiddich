require 'rails_helper'

RSpec.describe WorkspaceMember, type: :model do
  describe "Validaiton" do
    it { is_expected.to validate_presence_of(:workspace) }
    it { is_expected.to validate_presence_of(:user) }
    it { is_expected.to validate_presence_of(:role) }
    it { is_expected.to define_enum_for(:role).with_values([:owner, :admin, :member, :guest]) }

    context 'uniqueness validation' do
      subject { dup_workspace_member.valid? }
      let(:workspace_member) { create(:workspace_member) }
      let(:dup_workspace_member) { workspace_member.dup }

      context 'when workspace and user are same' do
        it { is_expected.to eq false }
      end

      context 'when user are not same' do
        before { dup_workspace_member.user = create(:user) }

        it { is_expected.to eq true }
      end

      context 'when workspace are not same' do
        before { dup_workspace_member.workspace = create(:workspace) }

        it { is_expected.to eq true }
      end
    end
  end

  describe 'Associations' do
    it { is_expected.to belong_to(:workspace) }
    it { is_expected.to belong_to(:user) }
  end
end
