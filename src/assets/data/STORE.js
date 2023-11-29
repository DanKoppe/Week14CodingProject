import { v4 as uuidv4 } from 'uuid';

export const STORE = [
    {
        id: uuidv4(),
        title: 'Excalibur',
        year: 1981,
        synopsis:
            "Merlin the magician helps Arthur Pendragon unite the Britons around the Round Table of Camelot, even as dark forces conspire to tear it apart.",
        imgSrc: "https://m.media-amazon.com/images/M/MV5BNmI4MDU0NDUtZTNmZC00YTYwLTk3NzgtMGFmYjg3N2VjODczXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        reviews: [
            {
                id: uuidv4(),
                user: "Dan",
                review: "This is my favorite movie of all time!",
                rating: 5
            },
            {
                id: uuidv4(),
                user: "Alison",
                review: "Not bad for a fantasy movie, but needs more vampires and werewolves.",
                rating: 3
            },
            {
                id: uuidv4(),
                user: "Pam",
                review: "I used to show this to my students when I taught, a classic!",
                rating: 4
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
        synopsis: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        imgSrc: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        reviews: [
            {
                id: uuidv4(),
                user: "Greg",
                review: "An all time classic retelling of JRR Tolken's fantasy epic!",
                rating: 5
            },
            {
                id: uuidv4(),
                user: "Kevin",
                review: "Director Peter Jackson has outdone himself with stunning visuals and a captivating story.",
                rating: 4
            },
            {
                id: uuidv4(),
                user: "Jessica",
                review: "I liked the animated version better.",
                rating: 2
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'Ready Player One',
        year: 2018,
        synopsis: "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
        imgSrc: "https://m.media-amazon.com/images/I/71NaQGqIhAL.jpg",
        reviews: [
            {
                id: uuidv4(),
                user: "Sam",
                review: "A cute and fun movie that spoke to my gamer heart.",
                rating: 5
            },
            {
                id: uuidv4(),
                user: "Erica",
                review: "I wanted to go dancing, but we watched this movie instead.",
                rating: 4
            },
            {
                id: uuidv4(),
                user: "Jessica",
                review: "My boyfriend spends the same amount of time online as the protagonist.",
                rating: 1
            }
        ]
    }
]