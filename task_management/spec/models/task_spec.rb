require 'rails_helper'

RSpec.describe Task, type: :model do
  describe "Validation" do
    it { is_expected.to validate_presence_of(:title) }
  end
end
