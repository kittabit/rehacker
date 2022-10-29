export const getUserProfile = async (user_id) => {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/user/' + user_id + '.json', { next: { revalidate: 60 } });
    return res.json();

}