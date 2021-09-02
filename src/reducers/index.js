const initialState = {
    movies:[
        {
            id: 1000,
            name:"Spider-Man: Homecoming",
            poster:"homecoming",
            youtube: "39udgGPyYMg",
            rating: 9.4,
            categories:["Action","Adventure","Comedy"],
            about: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City. A young Peter Parker/Spider-Man begins to navigate his newfound identity as the web-slinging super hero Spider-Man.",
            cast: ["tom_holland","robert_downey_jr","zendaya"],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"2h 14mins",
            releaseYear: 2017

        },
        {
            id: 1005,
            name:"Now You See Me",
            poster:"now_you_see_me",
            youtube: "KzJNYYkkhzc",
            rating: 7.2,
            categories:["Crime","Mystery","Thriller"],
            about: "An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.",
            cast: ["jesse_eisenberg","mark_ruffalo","michael_caine","morgan_freeman","woody_harrelson"],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"1h 52mins",
            releaseYear: 2013

        },
        {
            id: 1002,
            name:"Interstellar",
            poster:"interstellar",
            youtube: "zSWdZVtXT7E",
            rating: 8.6,
            categories:["Adevnture","Drama","Sci-Fi"],
            about: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
            cast: ["matthew_mcconaughey","anne_hathaway","zendaya"],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"2h 49mins",
            releaseYear: 2014

        },
        {
            id: 1003,
            name:"The Dark Knight Rises",
            poster:"dark_knight_rises",
            youtube: "zSWdZVtXT7E",
            rating: 8.4,
            categories:["Action","Adventure"],
            about: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
            cast: ["christian_bale","anne_hathaway","michael_caine","morgan_freeman","tom_hardy"],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"2h 44mins",
            releaseYear: 2012

        },
        {
            id: 1004,
            name:"Venom",
            poster:"venom",
            youtube: "u9Mv98Gr5pY",
            rating: 8.4,
            categories:["Action","Adventure","Sci-Fi"],
            about: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
            cast: ["tom_hardy","tom_holland","anne_hathaway","robert_downey_jr","chris_evans"],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"1h 52mins",
            releaseYear: 2018

        },
        {
            id: 1001,
            name:"The Social Network",
            poster:"social_network",
            youtube: "lB95KLmpLR4",
            rating: 7.7,
            categories:["Biography","Drama"],
            about: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
            cast: ["andrew_garfield","jesse_eisenberg","anne_hathaway","zendaya"],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"2h 14mins",
            releaseYear: 2010

        },
        {
            id: 1006,
            name:"The Avengers",
            poster:"the_avengers",
            youtube: "eOrNdBpGMv8",
            rating: 8.0,
            categories:["Action","Adventure","Sci-Fi"],
            about: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
            cast: ["robert_downey_jr","chris_evans","mark_ruffalo","chris_pratt",],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"2h 23mins",
            releaseYear: 2012

        },
        {
            id: 1007,
            name:"Jurassic World: Fallen Kingdom",
            poster:"jurassic_world",
            youtube: "vn9mMeWcgoM",
            rating: 8.0,
            categories:["Action","Adventure","Sci-Fi"],
            about: "When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
            cast: ["chris_pratt","jennifer_lawrence","chris_evans"],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"2h 8mins",
            releaseYear: 2018

        },
        {
            id: 1008,
            name:"Zombieland",
            poster:"zombieland",
            youtube: "8m9EVP8X7N8",
            rating: 7.6,
            categories:["Comedy","Adventure","Fantasy"],
            about: "A shy student trying to reach his family in Ohio, a gun-toting bruiser in search of the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America.",
            cast: ["jesse_eisenberg","emma_stone","woody_harrelson","andrew_garfield"],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"1h 28mins",
            releaseYear: 2009

        },
        {
            id: 1009,
            name:"The Amazing Spider-Man",
            poster:"amazing_spiderman",
            youtube: "nbp3Ra3Yp74",
            rating: 6.9,
            categories:["Action","Adventure","Fantasy"],
            about: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
            cast: ["andrew_garfield","emma_stone","jesse_eisenberg","woody_harrelson"],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"2h 16mins",
            releaseYear: 2012

        },
        {
            id: 1010,
            name:"X-Men: Days of Future Past",
            poster:"days_of_future_past",
            youtube: "6acRHWnfZAE",
            rating: 7.9,
            categories:["Action","Adventure","Sci-Fi"],
            about: "The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.",
            cast: ["hugh_jackman","emma_stone","jennifer_lawrence"],
            reviews: [
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
                {
                    review:"Really enjoyed the first two films, both contained great scenes/action, acting and the two best villains of the films. Was mixed on the third film, which wasn't that bad but suffered mainly from bloat",
                    rating: 9.4,
                    reviewDays: 6,
                    reviewer: "Jane Doe",
                },
            ],
            photosCount: 3,
            recommended:[],
            runtime:"2h 12mins",
            releaseYear: 2014

        },
    ],
}

// Use the initialState as a default value
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "EDIT_USER_DETAILS":
            state = {...state,name:action.name,friendCode:action.code}
            return state
        default:
            return state
    }
}   