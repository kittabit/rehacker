import { use } from 'react';

import NewsList from "../../components/posts/NewsList"
import { getNewsAskStories } from "../../lib/items"

export default function Page() {
    
    const newsItems = use(getNewsAskStories());

    return (
        <>
            
            <NewsList data={newsItems} />

        </>
    )

}