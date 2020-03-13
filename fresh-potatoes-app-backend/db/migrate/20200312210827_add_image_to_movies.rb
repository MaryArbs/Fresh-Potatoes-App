class AddImageToMovies < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :image, :string
  end
end
