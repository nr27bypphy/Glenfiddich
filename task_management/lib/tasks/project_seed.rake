namespace :project_seed do
  desc "Project の dummy data の作成"
  # rake project_seed:seed USER_ID=? OR rake project_seed:seed
  # で実行可能 project を 10件、それぞれのprojectに紐付くtaskを10件作成する
  task seed: :environment do
    user = User.find_by(id: ENV['USER_ID']) || User.first
    range = *(1..10)
    user.transaction do
      range.each do |_|
        name = Faker::Vehicle.model
        project = user.projects.create(
          title: name,
          description: Faker::Vehicle.manufacture,
          deadline: Faker::Time.between(from: DateTime.now - 356, to: DateTime.now)
        )

        range.each do |_|
          project.tasks.create(
            title: Faker::Book.title,
            description: Faker::Book.author,
            deadline: Faker::Time.between(from: DateTime.now - 356, to: DateTime.now)
          ) 
        end
      end
    end
  end
end
