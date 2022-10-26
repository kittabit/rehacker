import { use } from 'react';

import NewsList from "../../components/posts/NewsList"

async function getNewsItems() {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    return res.json();

}

export default function Page() {
    
    var newsItems = use(getNewsItems());

    return (
        <>
            
            <NewsList data={newsItems} />

        </>
    )

}