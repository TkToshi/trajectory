class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.text       :post_text,   null: false
      t.integer    :category_id, null: false
      t.integer    :visibility,  null: false
      t.references :user,        null: false, foreign_key:true
      t.timestamps
    end
  end
end
