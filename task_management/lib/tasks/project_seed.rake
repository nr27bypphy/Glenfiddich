namespace :project_seed do
  desc "Project の dummy data の作成"
  # rake project_seed:seed USER_ID=? OR rake project_seed:seed
  # で実行可能 project を 10件、それぞれのprojectに紐付くtaskを10件作成する
  task seed: :environment do
    user = User.find_by(id: ENV['USER_ID']) || User.first
    workspace_member = user.current_workspace_member
    workspace = workspace_member.workspace
    # 今日から1年前までを日付の取りうる期間とする。特に意味はない。なんとなく。
    date_from = DateTime.now - 365
    date_to = DateTime.now

    user.transaction do
      10.times do
        name = Faker::Vehicle.model
        project = workspace.projects.create(
          title: name,
          description: Faker::Vehicle.manufacture,
          deadline: Faker::Time.between(from: date_from, to: date_to),
          workspace: workspace
        )

        10.times do
          project.tasks.create(
            title: Faker::Book.title,
            description: Faker::Book.author,
            deadline: Faker::Time.between(from: date_from, to: date_to),
            workspace_member: workspace_member,
            is_approved: [true, false].sample
          ) 
        end
      end
    end
  end
end
