export const getNewsTopStories = async () => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json', { next: { revalidate: 60 } });
    return res.json();

}

export const getNewsShowStories = async () => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/showstories.json', { next: { revalidate: 60 } });
    return res.json();

}

export const getNewsNewStories = async () => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json', { next: { revalidate: 60 } });
    return res.json();

}

export const getNewsJobStories = async () => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json', { next: { revalidate: 60 } });
    return res.json();

}

export const getNewsAskStories = async () => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/askstories.json', { next: { revalidate: 60 } });
    return res.json();

}


export const getSingleNewsItem = async (item_id) => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/item/' + item_id + '.json', { next: { revalidate: 60 } });
    return res.json();

}
