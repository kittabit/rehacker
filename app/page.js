import { use } from 'react';

import NewsList from "../components/posts/NewsList"

import { getNewsTopStories } from "../lib/items"

export default function Page() {
    
    const newsItems = use(getNewsTopStories());

    return (
        <>
            
            <NewsList data={newsItems} />

        </>
    )

}