import { use } from 'react';

import SinglePost from "../../components/posts/SinglePost"

async function getNewsItems() {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty');
    return res.json();

}

export default function Page() {
    var newsItems = use(getNewsItems());
    newsItems = newsItems.slice(0, 30);

    return (
        <>
            
            <main className="pt-0">          
                <div className="relative flex min-h-screen flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
                    {newsItems &&
                        <>
                            {newsItems.map(item => {
                                return (
                                    <SinglePost key={item} id={item} />
                                )
                            })}
                        </>
                    }
                </div>
            </main>

        </>
    )

}