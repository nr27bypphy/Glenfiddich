require 'rails_helper'

RSpec.describe GlenfiddichManagementSchema do
  describe '#execute' do
    context 'when mutations is createProject' do
      subject(:result) {
        GlenfiddichManagementSchema.execute(
          query_string,
          context: context,
          variables: variables
        )
      }
      let(:query_string) {
        <<~QUERY
          mutation($workspaceMemberId: Int!) {
            destroyWorkspaceMember(input: { workspaceMemberId: $workspaceMemberId }) {
              workspaceMember {
                id
                role
              }
            }
          }
        QUERY
      }
      let(:context) {{current_workspace: workspace, current_user: workspace_member.user}}
      let(:variables) {{workspaceMemberId: workspace_member2.id}}

      let(:workspace) {create(:workspace)}
      # 削除された変化を確認したいので、let! で事前に定義しておく
      let!(:workspace_member) {create(:workspace_member, workspace: workspace)}
      let!(:workspace_member2) {create(:workspace_member, workspace: workspace)}

      before { create(:user_status, user: workspace_member.user, workspace: workspace) }
      let(:expected_response_hash) {
        {
          "data" => {
            "destroyWorkspaceMember" => {
              "workspaceMember" => {
                "id" => "#{workspace_member2.id}",
                "role" => workspace_member2.role,
              }
            }
          }
        }
      }

      it do
        expect {result}.to change(WorkspaceMember, :count).by(-1)
        expect(result.to_h).to eq expected_response_hash
      end
    end
  end
end