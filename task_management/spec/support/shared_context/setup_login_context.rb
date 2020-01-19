shared_context 'setup stub user login' do
  let(:user) { create(:user) }

  before 'ユーザーIDをセッションから取り出せるようにする' do
    allow_any_instance_of(ActionDispatch::Request).to receive(:session).and_return(user_id: user.id)
  end
end
