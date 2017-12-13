desc 'Fix Users'
task fix_users: [] do
  User.all.each do |user|
    user.firstname = 'Agony' if user.firstname.blank?
    user.lastname = 'Mouse' if user.lastname.blank?
    user.save
  end
end
