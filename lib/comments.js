export const getNewsComment = async (comment_id) => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/item/' + comment_id + '.json');
    return res.json();

}
