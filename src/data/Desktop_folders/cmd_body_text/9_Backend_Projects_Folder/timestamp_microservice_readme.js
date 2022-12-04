const timestamp_microservice_readme = [
    {
        type: "paragraph",
        data: "K~$ About this project"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ This project is the first from the five projects required to earn the freeCodeCamp Back End Development and APIs certificate"
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
        href: "https://timestamp-microservice.freecodecamp.rocks/"
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
        data: 'K~$ A request to “/api/:date?” with a valid date returns a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds and a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT, here’s an example of the JSON output of a 2015-12-25 date:{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ A request to “/api/:timestamp” with timestamp representing a number variable return a JSON object with a unix key and a utc key, here’s an example of the JSON output of a 1451001600000 timestamp:  { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ Providing an invalid date returns the following error: { error : "Invalid Date" }'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ An empty parameter returns a JSON of the current date"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ For more more info about this project please refer to the"
    },
    {
        type: "link",
        data: "freecodecamp website",
        href: "https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice"
    }
]

export default timestamp_microservice_readme;