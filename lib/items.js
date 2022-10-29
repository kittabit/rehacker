export const getNewsTopStories = async () => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    return res.json();

}

export const getNewsShowStories = async () => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty');
    return res.json();

}

export const getNewsNewStories = async () => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    return res.json();

}

export const getNewsJobStories = async () => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty');
    return res.json();

}

export const getNewsAskStories = async () => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty');
    return res.json();

}


export const getSingleNewsItem = async (item_id) => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/item/' + item_id + '.json?print=pretty');
    return res.json();

}
