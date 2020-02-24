require 'rails_helper'

RSpec.describe GlenfiddichManagementSchema do
  describe '#execute' do
    context 'when query is projects' do
      subject(:result) {
        GlenfiddichManagementSchema.execute(
          query_string,
          context: context,
          variables: variables
        )
      }
      let(:query_string) {
        <<~QUERY
          query($workspaceMemberId: Int) {
            projects(workspaceMemberId: $workspaceMemberId) {
              title
              description
              workspaceMemberId
            }
          }
        QUERY
      }
      let(:context) { {current_workspace: current_workspace} }
      let(:current_workspace) { create(:workspace) }
      let(:variables) { {workspaceMemberId: workspace_member_id} }
      let!(:project1) { create(:project, workspace: current_workspace) }
      let!(:project2) { create(:project, workspace: current_workspace, workspace_member_id: workspace_member_id) }
      let(:expected_response_hash) {
        {
          "data" => {
            "projects" => expected_projects
          }
        }
      }
      let(:keys) { %w(title description workspace_member_id) }
      
      context 'when workspace_member_id is nil' do
        let(:workspace_member_id) { nil }
        let(:expected_projects) do
          [project1, project2].map do |project|
            project.attributes.slice(*keys).transform_keys { |k| k.camelize(:lower) }
          end
        end
        
        it { expect(result.to_h).to eq expected_response_hash }
      end
      
      context 'when workspace_member_id is not nil' do
        let(:workspace_member_id) { create(:workspace_member, workspace: current_workspace).id }
        let(:expected_projects) do
          [project2].map do |project|
            project.attributes.slice(*keys).transform_keys { |k| k.camelize(:lower) }
          end
        end
        
        it { expect(result.to_h).to eq expected_response_hash }
      end
    end
  end
end
