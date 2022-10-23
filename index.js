import alfy from "alfy";

const HACKERNEWS_API = "https://hacker-news.firebaseio.com/v0/";
const HACKERNEWS_TOP_STORIES = "topstories.json?print=pretty";
const HACKERNEWS_URL = "https://news.ycombinator.com/item?id="

// grab top stories by id and filter for first 10
let topStoryIds = await alfy.fetch(HACKERNEWS_API + HACKERNEWS_TOP_STORIES);
topStoryIds = topStoryIds.slice(0, 10);

const urls = topStoryIds.map((element) => {
  const url = HACKERNEWS_API + "item/" + element + ".json";
  return url;
});


// grab all the articles and setup json
const articles = await Promise.all(
  urls.map(async (element) => {
    const response = await alfy.fetch(element, { maxAge: 5000 });

    const items = {
      title: response.title,
      subtitle: [response.by, response.score].join(", "),
      arg: 'url' in response? response.url: HACKERNEWS_URL + response.id,
    };

    return items;
  })
);

alfy.output(articles);
