require 'rails_helper'

describe ApplicationHeadlessPolicy do
  subject { described_class.new(user) }
  let(:user) { build(:user) }

  it { is_expected.to forbid_actions(%i(index show create new update edit destroy)) }
end
