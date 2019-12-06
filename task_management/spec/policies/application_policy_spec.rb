require 'rails_helper'

describe ApplicationPolicy do
  subject { described_class.new(user, record) }
  let(:user) { build(:user) }
  let(:record) { nil }

  it { is_expected.to forbid_actions(%i(index show create new update edit destroy)) }
end
