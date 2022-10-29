import { use } from 'react';

import NewsList from "../../components/posts/NewsList"
import { getNewsShowStories } from "../../lib/items"

export default function Page() {
    
    const newsItems = use(getNewsShowStories());

    return (
        <>
            
            <NewsList data={newsItems} />

        </>
    )

}