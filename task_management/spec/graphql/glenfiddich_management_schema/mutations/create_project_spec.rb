require 'rails_helper'

RSpec.describe GlenfiddichManagementSchema do
  describe '#execute' do
    shared_examples_for 'expected to create project and get expected response hash' do
      it do
        expect { result }.to change(Project, :count).by(1)
        expect(result.to_h).to eq expected_response_hash
      end
    end

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
          mutation($title: String!, $description: String!, $workspaceMemberId: Int) {
            createProject(input: { title: $title, description: $description, workspaceMemberId: $workspaceMemberId }) {
              project {
                title
                description
                workspaceMemberId
              }
            }
          }
        QUERY
      }
      let(:context) { { current_workspace: current_workspace } }
      let(:current_workspace) { create(:workspace) }
      let(:variables) { { title: 'タイトル', description: 'ディスクリプション', workspaceMemberId: workspace_member_id } }
      let(:expected_response_hash) {
        {
          "data" => {
            "createProject" => {
              "project" => {
                "title" => 'タイトル',
                "description" => 'ディスクリプション',
                "workspaceMemberId" => workspace_member_id
              }
            }
          }
        }
      }

      context 'when workspace_member_id is nil' do
        let(:workspace_member_id) { nil }

        include_examples 'expected to create project and get expected response hash'
      end

      context 'when workspace_member_id is not nil' do
        let(:workspace_member_id) { create(:workspace_member, workspace: current_workspace).id }

        include_examples 'expected to create project and get expected response hash'
      end
    end
  end
end
