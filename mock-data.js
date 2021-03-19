let mock = [{
    id: 1,
    name: "The 2-Hour Job Search",
    price: "$13 - $14",
    language: "English",
    author: "Steve Dalton",
    genre: "Self-help",
    image: ''
  },
  {
    id: 2,
    name: "The Five People You Meet In Heaven",
    price: "$7 - $15",
    language: "English",
    author: "Mitch Albom",
    genre: "Philosophical fiction",
    image: ''
  },
  {
    id: 3,
    name: "From Thrid World To First",
    price: "$15 - $35",
    language: "English",
    author: "Lee Kuan Yew",
    genre: "Biography",
    image: ""
  },
  {
    id: 4,
    name: "The 7 Habits Of Highly Effective People",
    price: "$14 - $17",
    language: "English",
    author: "Stephen Covey",
    genre: "Self-help",
    image: ""
  },
  {
    id: 5,
    name: "Good To Great",
    price: "$9 - $13",
    language: "English",
    author: "Jim Collins",
    genre: "Non-fiction",
    image: ""
  },
  {
    id: 6,
    name: "Who Moved My Cheese?",
    price: "$7 - $12",
    language: "English",
    author: "Spencer Johnson",
    genre: "Self-help fiction",
    image: ""
  },
  {
    id: 7,
    name: "The Art Of War",
    price: "$13 - $15",
    language: "Chinese Mandarin",
    author: "Sun Tzu",
    genre: "Treatise, Biography",
    image: ""
  },
  {
    id: 8,
    name: "A Promised Land",
    price: "$18 - $24",
    language: "English",
    author: "Barack Obama",
    genre: "Autobiography, Biography",
    image: ""
  },
  {
    id: 9,
    name: "Rich Dad Poor Dad",
    price: "$8 - $10",
    language: "English",
    author: "Robert Kiyosaki",
    genre: "Personal finance, Non-fiction",
    image: ""
  },
  {
    id: 10,
    name: "The Power Of Subconcious Mind",
    price: "$10 - $12",
    language: "English",
    author: "Joseph Murphy",
    genre : "Self-help",
    image: ""
  },
  {
    id: 11,
    name: "The Hill We Climb",
    price: "$13",
    language: "Englsih",
    author: "Amanda Gorman",
    genre: "Poetry",
    image: ""
  },
  {
    id: 12,
    name: "Self-help book",
    price: "$20",
    language: "English",
    author: "Bill Gates",
    genre: "Nature writing",
    image: ""
  },
  {
    id: 13,
    name: "In Five Years",
    price: "$15",
    language: "English",
    author: "Rebecca Serle",
    genre: "Romance novel",
    image: ""
  },
  {
    id: 14,
    name: "Blood Brothers",
    price: "$14",
    language: "English",
    author: "Elias Chacour",
    genre: "Biography",
    image: ""
  },
  {
    id: 15,
    name: "Beyond Order: 12 More Rules for Life",
    price: "#23",
    language: "English",
    author: "Jordan Peterson",
    genre: "Self-help",
    image: ""
  },
  {
    id: 16,
    name: "The Boy, the Mole, the Fox and the Horse",
    price: "$23",
    language: "Ennglish",
    author: "Charlie Mackesy",
    genre: "Comics",
    image: ""
  },
  {
    id: 17,
    name: "Klara And The Sun",
    price: "$25",
    language: "English",
    author: "Kazuo Ishiguro",
    genre: "Science Fiction, Dystopian Fiction",
    image: ""
  },
  {
    id: 18,
    name: "Think Again: The Power of Knowing What You Don't Know",
    price: "$22",
    language: "English",
    author: "Adam Grant",
    genre: "Self-help",
    image: ""
  },
  {
    id: 19,
    name: "Just as I Am: A Memoir",
    price: "$22",
    language: "English",
    author: "Cicely Tyson",
    genre: "Biography, Autobiography",
    image: ""
  },
  {
    id: 20,
    name: "Breath: The New Science of a Lost Art",
    price: "$28",
    language: "English",
    author: "James Nestor",
    genre: "Self-help book, Creative nonfiction",
    image: ""
  },
  {
    id: 21,
    name: "Four Hundred Souls",
    price: "$24",
    language: "English",
    author: "Ibram X. Kendi (Editor), Keisha N. Blain (Editor)",
    genre: "Biography",
    image: ""
  },
  {
    id: 22,
    name: "The Song of Achilles",
    price: "$15",
    language: "English",
    author: "Madeline Miller",
    genre: "Novel, Romance novel, Historical Fiction, War story",
    image: ""
  },
  {
    id: 23,
    name: "Becoming",
    price: "$16",
    language: "English",
    author: "Michelle Obama",
    genre: "Memoir, Biography, Autobiography",
    image: ""
  },
  {
    id: 24,
    name: "White Fragility",
    price: "$14",
    language: "English",
    author: "Robin DiAngelo,",
    genre: "Self-help",
    image: ""
  },
  {
    id: 25,
    name: "Thinking, Fast and Slow",
    price: "$16",
    language: "English",
    author: "Daniel Kahneman",
    genre: "Non-fiction",
    image: ""
  },
  {
    id: 26,
    name: "Hood Feminism",
    price: "$14.50",
    language: "English",
    author: "Mikki Kendall",
    genre: "Feminist",
    image: ""
  },
  {
    id: 27,
    name: "The Color of Law",
    price: "$16",
    language: "English",
    author: "Richard Rothstein",
    genre: "Non-fiction",
    image: ""
  },
  {
    id: 28,
    name: "Milk And Honey",
    price: "$12",
    language: "English",
    author: "Rupi Kaur",
    genre: "Poetry",
    image: ""
  },
  {
    id: 29,
    name: "The Midnight Library",
    price: "$21",
    language: "English",
    author: "Matt Haig",
    genre: "Science Fiction, Fantasy Fiction",
    image: ""
  },
  {
    id: 30,
    name: "One Of Us Is Lying",
    price: "$15",
    language: "English",
    author: "Karen M. McManus",
    genre: "Young adult fiction, Mystery",
    image: ""
  },
  {
    id: 31,
    name: "These Violent Delights",
    price: "$15",
    language: "English",
    author: "Chloe Gong",
    genre: "Fantasy Fiction",
    image: ""
  },
  {
    id: 32,
    name: "Chain of Iron",
    price: "$20",
    language: "English",
    author: "Cassandra Clare",
    genre: "Shadowhunters",
    image: ""
  },
  {
    id: 33,
    name: "A Brief History of Time",
    price: "$13",
    language: "English",
    author: "Stephen Hawking",
    genre: "Popular Science",
    image: ""
  },
  {
    id: 34,
    name: "Fahrenheit 451",
    price: "$13.50",
    language: "English",
    author: "Ray Bradbury",
    genre: "Utopian and dystopian fiction",
    image: ""
  },
  {
    id: 35,
    name: "Things Fall Apart",
    price: "$13",
    language: "English",
    author: "Chinua Achebe",
    genre: "Novel, Historical Fiction",
    image: ""
  },
  {
    id: 36,
    name: "The Year of Magical Thinking",
    price: "$11",
    language: "English",
    author: "Joan Didion",
    genre: "Memoir",
    image: ""
  },
  {
    id: 37,
    name: "A Simple Plan",
    price: "$14.50",
    language: "English",
    author: "Scott Smith",
    genre: "Thriller, Suspense, Psychological Fiction",
    image: ""
  },
  {
    id: 38,
    name: "We Begin at the End",
    price: "$17",
    language: "English",
    author: "Chris Whitaker ",
    genre: "Thriller, Literary fiction",
    image: ""
  },
  {
    id: 39,
    name: "Dirty Gold",
    price: "$23",
    language: "English",
    author: "Kyra Gurney, Nicholas Nehamas, Jay Weaver, Jim Wyss",
    genre: "True Crime",
    image: ""
  },
  {
    id: 40,
    name: "Andrew Carnegie",
    price: "$24",
    language: "English",
    author: "David Nasaw",
    genre: "Biography",
    image: ""
  }
]

export default mock;
