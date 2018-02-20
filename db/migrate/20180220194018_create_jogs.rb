class CreateJogs < ActiveRecord::Migration[5.1]
  def change
    create_table :jogs do |t|
      t.decimal :distance
      t.integer :time
      t.belongs_to :user

      t.timestamps
    end
  end
end
