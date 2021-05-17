# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Entry.destroy_all
Deck.destroy_all
User.destroy_all

molly = User.new({ :username => "Molly", :email => "molly@molly.exten", :password => "molly1" })
molly.save

jon = User.new({ :username => "Jon", :email => "jon@jon.withers", :password => "jonny1"})
jon.save

zoe = User.new({ :username => "Zoe", :email => "zoe@zoe.withers", :password => "zoewith1"})
zoe.save

molly_deck = Deck.create(title: "GRE Vocabulary 1", user: molly, publicDeck: true, author: molly.username)
jon_deck = Deck.create(title: "high falutin words", user: jon, publicDeck: false, author: jon.username)
zoe_deck = Deck.create(title: "smart words", user: zoe, publicDeck: false, author: zoe.username)

gre_vocab = Entry.create(
  [
    {
      term: "pedant",
      details: "smb. overly concerned w/ minor details or displaying academic knowledge",
      deck: molly_deck
    }, 
    {
      term: "engender",
      details: "cause to exist or develop",
      deck: molly_deck
    },
    {
      term: "enervate",
      details: "v. to weaken // adj. lacking energy",
      deck: molly_deck
    },
    {
      term: "obdurate",
      details: "stubbornly unwilling to change one's mind",
      deck: molly_deck
    },
    {
      term: "garrulous",
      details: "very talkative, esp. on trivial matters",
      deck: molly_deck
    },
    {
      term: "artless",
      details: "without guile or deception; frank, direct",
      deck: molly_deck
    }
  ]
  )

  high_fallutin = Entry.create(
    [
      {
        term: "travesty",
        details: "a grotesque parody; a distortion or complete misrepresentation",
        deck: jon_deck
      }, 
      {
        term: "disinterested",
        details: "unbiased",
        deck: jon_deck
      },
      {
        term: "abrogate",
        details: "to repeal a law, abolish an arrangement, or evade a responsibility",
        deck: jon_deck
      },
      {
        term: "apprise",
        details: "to teach or inform",
        deck: jon_deck
      },
      {
        term: "belie",
        details: "to contradict or give the false impression of",
        deck: jon_deck
      },
      {
        term: "disburse",
        details: "to give out, especially money",
        deck: jon_deck
      }
    ]
    )

    smart_words = Entry.create(
    [
      {
        term: "founder",
        details: "to fill with water and sink; figuratively: to fall",
        deck: zoe_deck
      }, 
      {
        term: "jibe",
        details: "to be in accord with (e.g. it doesn't jibe with the facts)",
        deck: zoe_deck
      },
      {
        term: "perspicuous",
        details: "easily understood, obvious",
        deck: zoe_deck
      },
      {
        term: "perspicacious",
        details: "smb. who understands things quickly or has good insight",
        deck: zoe_deck
      },
      {
        term: "proscribe",
        details: "to outlaw smb. or smth.",
        deck: zoe_deck
      },
      {
        term: "venal",
        details: "corrupt, able to be bribed, for sale",
        deck: zoe_deck
      }
    ]
    )