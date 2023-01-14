const celestial_bodies_database_readme = [
    {
        type: "paragraph",
        data: "K~$ About this project"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ This project is the first from the five projects required in order to gain the freecodecamp Relational Database certificate"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ In this project I made a postgresql database called universe containing 6 tables:"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ galaxy: this table contains the galaxies and their info"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ star: this table contains the stars and their info, it’s linked to galaxy table since each start belongs to a certain galaxy"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ planet: this table contains the planets and their info, it’s linked to star table since each planet belongs to a certain star"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ moon; this table contains the moons and their info, it’s linked to planet table since each start belongs to a certain planet"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ galaxy types: a lot of galaxies share the same type, this table list these types to be referenced on the galaxy table to avoid repetition"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ planet types: a lot of planets share the same type, this table list these types to be referenced on the planet table to avoid repetition"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ This database has been dumped into an sql file that you can check on the source code section"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ For more info about this project please refer to the"
    },
    {
        type: "link",
        data: "freecodecamp website",
        href: "https://www.freecodecamp.org/learn/relational-database/build-a-celestial-bodies-database-project/build-a-celestial-bodies-database"
    }
]

export default celestial_bodies_database_readme;