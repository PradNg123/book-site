const allBooks = {
  "Horror": [
    { title: "It", author: "Stephen King", cover: "images/It.jpg", read: "https://clicklibrary.wordpress.com/wp-content/uploads/2018/09/it-by-stephen-king.pdf", download: "https://clicklibrary.wordpress.com/wp-content/uploads/2018/09/it-by-stephen-king.pdf" },
    { title: "Dracula", author: "Bram Stoker", cover: "images/dracula.jpg", read: "https://www.gutenberg.org/ebooks/345", download: "https://www.gutenberg.org/files/345/345-h/345-h.htm" },
    { title: "Frankenstein", author: "Mary Shelley", cover: "images/frankenstein.jpg", read: "https://www.coreknowledge.org/wp-content/uploads/2023/08/CC_Frankenstein_Reader_W1.pdf", download: "https://www.coreknowledge.org/wp-content/uploads/2023/08/CC_Frankenstein_Reader_W1.pdf" },
    { title: "The Haunting of Hill House", author: "Shirley Jackson", cover: "images/hillhouse.jpg", read: "https://havenner.weebly.com/uploads/2/0/5/7/20575006/jackson-shirley-the-haunting-of-hill-house.pdf", download: "https://havenner.weebly.com/uploads/2/0/5/7/20575006/jackson-shirley-the-haunting-of-hill-house.pdf" },
    { title: "Pet Sematary", author: "Stephen King", cover: "images/petsematary.jpg", read: "https://readerslibrary.org/wp-content/uploads/Pet-Sematary.pdf", download: "https://readerslibrary.org/wp-content/uploads/Pet-Sematary.pdf" },
    { title: "The Shining", author: "Stephen King", cover: "images/shining.jpg", read: "https://englishprofi.com.ua/wp-content/uploads/Stephen-King-The-Shining.pdf", download: "https://englishprofi.com.ua/wp-content/uploads/Stephen-King-The-Shining.pdf" },
    { title: "House of Leaves", author: "Mark Z. Danielewski", cover: "images/houseofleaves.jpg", read: "https://underworldsblog.wordpress.com/wp-content/uploads/2018/10/House-Of-Leaves-file-2.pdf", download: "https://underworldsblog.wordpress.com/wp-content/uploads/2018/10/House-Of-Leaves-file-2.pdf" },
    { title: "Hell House", author: "Richard Matheson", cover: "images/hellhouse.jpg", read: "https://cdn.bookey.app/files/pdf/book/en/hell-house.pdf", download: "https://cdn.bookey.app/files/pdf/book/en/hell-house.pdf" },
    { title: "Bird Box", author: "Josh Malerman", cover: "images/birdbox.jpg", read: "https://s1.papyruspub.com/files/demos/products/ebooks/novels/thriller/Preview-Bird-Box-by-Josh-Malerman.pdf", download: "https://s1.papyruspub.com/files/demos/products/ebooks/novels/thriller/Preview-Bird-Box-by-Josh-Malerman.pdf" },
    { title: "Something Wicked This Way Comes", author: "Ray Bradbury", cover: "images/wicked.jpg", read: "https://archive.org/details/somethingwicked", download: "https://archive.org/download/somethingwicked/book.pdf" }
  ],
  // Add Sci-Fi, Action, Romance, etc. in the same way
  
    "Sci-Fi": [
    { title: "Journey to the center of the Earth", author: "Jules Verne", cover: "images/Journey.jpg", read: "https://www.gutenberg.org/cache/epub/18857/pg18857-images.html", download: "https://www.gutenberg.org/cache/epub/18857/pg18857-images.html" },
    { title: "Twenty Thousand Leagues Under the Sea", author: "Jules Verne", cover: "images/Sea.jpg", read: "https://www.arvindguptatoys.com/arvindgupta/20000-leagues.pdf", download: "https://www.arvindguptatoys.com/arvindgupta/20000-leagues.pdf" },
    { title: "The Time Machine", author: "H.G. Wells", cover: "images/Machine.jpg", read: "https://www.fourmilab.ch/etexts/www/wells/timemach/timemach.pdf", download: "https://www.fourmilab.ch/etexts/www/wells/timemach/timemach.pdf" },
    { title: "The War of the Worlds", author: "H.G. Wells", cover: "images/war.jpg", read: "https://www.planetpublish.com/wp-content/uploads/2011/11/The_War_of_the_Worlds_NT.pdf", download: "https://www.planetpublish.com/wp-content/uploads/2011/11/The_War_of_the_Worlds_NT.pdf" },
    { title: "The Eyes Have It", author: "Philip K. Dick", cover: "images/Eyes.jpg", read: "https://cdn.bookey.app/files/pdf/book/en/the-eyes-have-it.pdf", download: "https://cdn.bookey.app/files/pdf/book/en/the-eyes-have-it.pdf" },
    { title: "The Sky Trap", author: "Frank Belknap Long", cover: "images/Sky.jpg", read: "https://www.gutenberg.org/cache/epub/24151/pg24151-images.html", download: "https://www.gutenberg.org/cache/epub/24151/pg24151-images.html" },
    { title: "Anthem", author: "Ayn Rand", cover: "images/Anthem.jpg", read: "https://s3.us-west-1.wasabisys.com/luminist/EB/R/Rand%20-%20Anthem.pdf", download: "https://s3.us-west-1.wasabisys.com/luminist/EB/R/Rand%20-%20Anthem.pdf" },
    { title: "2 B R 0 2 B", author: "Kurt Vonnegut", cover: "images/2B.jpg", read: "https://www.rvclibrary.org/wp-content/uploads/2022/11/January-2023-Short-Stories.pdf", download: "https://www.rvclibrary.org/wp-content/uploads/2022/11/January-2023-Short-Stories.pdf" },
],
    "Action": [
    { title: "JA Farewell to Arms", author: "Ernest Hemingway", cover: "images/farewell.jpg", read: "https://www.kkoworld.com/kitablar/Ernest_Heminquey_Elvida_silah_eng.pdf", download: "https://www.kkoworld.com/kitablar/Ernest_Heminquey_Elvida_silah_eng.pdf" },
    { title: "The Sound and the Fury", author: "William Faulkner", cover: "images/fury.jpg", read: "https://antilogicalism.com/wp-content/uploads/2018/04/sound-and-fury.pdf", download: "https://antilogicalism.com/wp-content/uploads/2018/04/sound-and-fury.pdf" },
    { title: "A Room of One’s Own", author: "Virginia Woolf", cover: "images/room.jpg", read: "http://seas3.elte.hu/coursematerial/PikliNatalia/Virginia_Woolf_-_A_Room_of_Ones_Own.pdf", download: "http://seas3.elte.hu/coursematerial/PikliNatalia/Virginia_Woolf_-_A_Room_of_Ones_Own.pdf" },
    { title: "The Maltese Falcon", author: "Dashiell Hammett", cover: "images/falcon.jpg", read: "https://gertrudesteinsite.wordpress.com/wp-content/uploads/2017/01/dashiell-hammett-the-maltese-falcon.pdf", download: "https://gertrudesteinsite.wordpress.com/wp-content/uploads/2017/01/dashiell-hammett-the-maltese-falcon.pdf" },
    { title: "Cup of Gold", author: "John Steinbeck", cover: "images/gold.jpg", read: "https://upload.wikimedia.org/wikipedia/commons/3/30/John_Steinbeck_-_Cup_of_Gold_%281937_printing%2C_William_Heinemann%29.pdf", download: "https://upload.wikimedia.org/wikipedia/commons/3/30/John_Steinbeck_-_Cup_of_Gold_%281937_printing%2C_William_Heinemann%29.pdf" },
    { title: "A High Wind in Jamaica", author: "Richard Hughes", cover: "images/wind.jpg", read: "https://lannest.academy/media/media/books/a_High_Wind_in_Jamaica.pdf",download: "https://lannest.academy/media/media/books/a_High_Wind_in_Jamaica.pdf" },
    { title: "Rope", author: "Patrick Hamilton", cover: "images/rope.jpg", read: "https://cdn.bookey.app/files/pdf/book/en/rope.pdf", download: "https://cdn.bookey.app/files/pdf/book/en/rope.pdf" },
    { title: "Red Harvest", author: "Dashiell Hammett", cover: "images/red.jpg", read: "https://readerslibrary.org/wp-content/uploads/Red-Harvest.pdf", download: "https://readerslibrary.org/wp-content/uploads/Red-Harvest.pdf" },
]
   
  
};


