import { use } from 'react';

import NewsList from "../../components/posts/NewsList"
import { getNewsJobStories } from "../../lib/items"

export default function Page() {
    
    const newsItems = use(getNewsJobStories());

    return (
        <>
            
            <NewsList data={newsItems} />

        </>
    )

}