import { use } from 'react';

import NewsList from "../../components/posts/NewsList"
import { getNewsNewStories } from "../../lib/items"

export default function Page() {
    
    const newsItems = use(getNewsNewStories());

    return (
        <>
            
            <NewsList data={newsItems} />

        </>
    )

}