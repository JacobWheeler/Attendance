
20.times do |n|
  n += 1
  user = User.create(
    name: Faker::StarWars.unique.character,
    email: "test#{n}@test.com",
    password: 'password',
    admin: false
  )
  3.times do
    room = Room.create(
      name: Faker::Number.number(1)
    )
  1.times do
    count = Count.create(
      user_id: user.id,
      room_id: room.id,
      value: Faker::Number.number(2),
      time: "start"
    )
  1.times do
    count = Count.create(
      user_id: user.id,
      room_id: room.id,
      value: Faker::Number.number(2),
      time: "middle"
    )
  1.times do
    count = Count.create(
      user_id: user.id,
      room_id: room.id,
      value: Faker::Number.number(2),
      time: "end"
    )
  end
  end
  end 
  end
end