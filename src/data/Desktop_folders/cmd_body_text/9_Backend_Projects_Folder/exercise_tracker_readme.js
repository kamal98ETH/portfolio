const exercise_tracker_readme = [
    {
        type: "paragraph",
        data: "K~$ About this project"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ This project is the third from the five projects required to earn the freeCodeCamp Back End Development and APIs certificate"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ To complete this project, I had to Build a full stack JavaScript app that is functionally similar to"
    },
    {
        type: "link",
        data: "this",
        href: "https://exercise-tracker.freecodecamp.rocks/"
    },
    {
        type: "paragraph",
        data: " using express js that does as follow:"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ Creates a database using mongoose, that stores users and exercices"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ Creates new users and stores them on the database using the username submitted in the POST request on "/api/users"'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ A GET request to "/api/users" returns a list of all users'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ Creates new exercices and stores them on the database using the info submitted in the POST request on "/api/users/:_id/exercises"'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ A GET request to "/api/users/:_id/logs" returns a JSON object with a count property representing the number of exercises that belong to that user and a log array of all the exercises added'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ The client can add "from", "to" and "limit" parameters to a GET "/api/users/:_id/logs" request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back'
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
        href: "https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker"
    }
]

export default exercise_tracker_readme;