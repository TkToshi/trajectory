class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.text       :user_profile,         null: false
      t.integer    :gender_id
      t.integer    :user_follower_figure
      t.integer    :user_following_figure
      t.references :user,                 null: false, foreign_key:true
      t.timestamps
    end
  end
end
