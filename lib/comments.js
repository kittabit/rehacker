export const getNewsComment = async (comment_id) => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/item/' + comment_id + '.json', { next: { revalidate: 60 } });
    return res.json();

}
