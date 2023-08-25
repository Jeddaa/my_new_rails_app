# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
first_greeting = Greeting.create(greeting: "Hello There!")
second_greeting = Greeting.create(greeting: "How do you do!")
third_greeting = Greeting.create(greeting: "Bonjour!")
fourth_greeting = Greeting.create(greeting: "Salam Alaykum!")
fifth_greeting = Greeting.create(greeting: "Good morning!")
# Greeting.create([
#                  { greeting: 'Hello!' },
#                  { greeting: 'Hi! Can I buy you some ice cream?' },
#                  { greeting: 'Howdi! What brings you here today?' },
#                  { greeting: 'Good evening! How may I be of service?' },
#                  { greeting: 'Good morning!' }
#                ])
