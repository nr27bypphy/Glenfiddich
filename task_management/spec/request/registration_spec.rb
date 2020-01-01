require 'rails_helper'

RSpec.describe RegistrationsController, type: :request do
  describe 'GET /registration' do
    context 'when user is not login status' do
      it {is_expected.to eq 200}
    end

    context 'when user is login status' do
      include_context 'setup stub user login'

      it {is_expected.to redirect_to(root_path)}
    end
  end

  describe 'POST /registration' do
    context 'when params are valid' do
      before do
        params[:registration] = {
          workspace_name: 'Glenfiddich',
          user_name: '江藤ゆうすけ',
          email: 'eto.yusuke.test@gmail.com',
          password: '11111111',
          password_confirmation: '11111111'
        }
      end

      it do
        expect {subject}.to change(User, :count).by(1)
                              .and change(Workspace, :count).by(1)
                                     .and change(WorkspaceMember, :count).by(1)
        is_expected.to redirect_to(root_path)
      end
    end

    context 'when params are invalid' do
      context 'when email is duplicate' do
        let(:user) { create(:user) }
        before do
          params[:registration] = {
            workspace_name: 'Glenfiddich',
            user_name: '江藤ゆうすけ',
            email: user.email,
            password: '11111111',
            password_confirmation: '11111111'
          }
        end

        it do
          is_expected.to eq 422
          expect(flash.now[:alert]).to eq 'Email has already been taken'
        end
      end
    end
  end
end
