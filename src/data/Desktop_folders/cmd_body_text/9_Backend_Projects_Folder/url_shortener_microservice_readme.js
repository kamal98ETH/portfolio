const url_shortener_microservice_readme = [
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
        href: "https://url-shortener-microservice.freecodecamp.rocks/"
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
        data: 'K~$ A POST request to “/api/shorturl” returns a JSON object with original_url and short_url properties'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ Here’s an example of the JSON output: { original_url : 'https://freeCodeCamp.org', short_url : 1}"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ A GET request to “/api/shorturl/<short_url>”, will redirect the client to the original URL'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ The api verifies the submitted URL using dns.lookup(host, cb)"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ If the client passes an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ I also made a JSON file (urls.json) to store the data, when the client makes the POST request, the api checks the JSON file if it stores the url and returns its short_url"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ If it’s not found, the api will update the JSON file by adding the new url with a new short_url"
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
        href: "https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice"
    }
]

export default url_shortener_microservice_readme;