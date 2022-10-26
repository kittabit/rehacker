'use client';

import { useSearchParams } from 'next/navigation';

import SinglePost from './SinglePost';

export default function NewsList( props ) {

    const searchParams = useSearchParams();

    var items_per_page = 30;
    var start = 0;
    var end = 30;
    var p = searchParams.get('p');
    if( p == null || p == 0) {
        p = 0;
    }else{
        start = p * items_per_page;
        end = start + items_per_page;
    }

    var next_page = parseInt(p) + 1;
    var prev_page = parseInt(p) - 1;
    
    var newsItems = props.data;
    newsItems = newsItems.slice(start, end);

    return (
        <>

            <main className="pt-0">          
                <div className="relative flex min-h-screen flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
                    {newsItems &&
                        <>
                            {newsItems.map((item, index) => (   
                                <SinglePost key={ index } id={ item } />
                            ))}
                        </>
                    }
                </div>
            </main>

        </>
    )

}