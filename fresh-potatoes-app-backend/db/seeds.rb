# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.all.destroy_all

Movie.create([{ title: 'Dumb and Dumber' }, { title: 'Girl Interrupted' }, { title: 'Muppets Christmas Carol' }, { title: 'The Santa Claus' }, { title: 'When Harry Met Sally' }, { title: 'Invisible Man' }, { title: 'Jo Jo Rabbit' }, { title: '1917' }, { title: 'Ford vs Ferrari' }, { title: 'Parasite' }, { title: 'The Bodyguard' }, { title: 'Hook' }, { title: 'The Sandlot' }, { title: 'The Mighty Ducks' }, { title: 'Mrs. Doubtfire' }, { title: 'Shawshank Redemption' }, { title: 'Saving Private Ryan' }, { title: 'Forest Gump' }, { title: 'Titanic' }, { title: 'The Secret Window' }, { title: 'A Beautiful Mind' }, { title: 'Frozen' },{ title: 'Lord of the Rings: The Fellowship of the Rings' }, { title: 'Lord of the Rings: The Two Towers' }, { title: 'Lord of the Rings: The Return of the King' }]);



User.create(username: "demo", password_digest: "demo");

Review.create(comment: "Great Movie", rating: "4", movie_id: "101", user_id: "1")




