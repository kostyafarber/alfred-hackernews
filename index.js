const axios = require('axios');

const HACKERNEWS = 'https://hacker-news.firebaseio.com/v0/topstories.json';

let data = async () => {
    response = await axios.get(HACKERNEWS)
    return response
}

ids = data()

ids.then(data => {
    console.log(data.data)
})


// two ways of writing functions (similar to lambda functions in Python)
function helloWorld(whichWord) {
    console.log(`Hello ${whichWord}`)
}

helloWorld("Australia")

let helloWorldArrow = whichWord => {
    console.log(`Hello ${whichWord}`)
}

helloWorldArrow("England")
