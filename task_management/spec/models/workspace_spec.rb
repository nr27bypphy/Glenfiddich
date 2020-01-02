require 'rails_helper'

RSpec.describe Workspace, type: :model do
  describe "Validaiton" do
    subject { workspace }
    let(:workspace)  { create(:workspace) }

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_uniqueness_of(:name).case_insensitive }
  end

  describe 'Associations' do
    it { is_expected.to have_many(:workspace_members) }
    it { is_expected.to have_many(:projects) }
  end
end
