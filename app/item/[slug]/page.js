import React from 'react';
import { use } from 'react';
import Link from 'next/link';

import DateOutput from '../../../components/global/DateOutput';
import DomainOutput from '../../../components/global/DomainOutput';
import SingleComment from '../../../components/comments/SingleComment';

async function getNewsItem(id) {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty');
    return res.json();

}

export default function SingleNewsItemPage({ params, searchParams }) {
    var newsItem = use(getNewsItem( params.slug ));

    var comments = newsItem.kids;

    return (
        <>            
            <main className="pt-0">          
                <div className="relative flex flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">                                    
                    <div className="bg-white shadow-xl shadow-gray-100 w-full max-w-5xl px-5 py-4 border-b-2 border-grey" data-itemtype={ newsItem.type }>
                        <h3 className="font-bold font-base mt-px">
                            { newsItem.url ? (
                                <>
                                    <a href={ newsItem.url } target="_blank" rel="noopener noreferrer">{ newsItem.title }</a>
                                </>
                            ) : (
                                <>
                                    <Link href="/item/[id]" as={`/item/${newsItem.id}`}>
                                        { newsItem.title }
                                    </Link>
                                </>
                            ) }                            
                            <span className="font-normal text-xs pl-2"><DomainOutput url={ newsItem.url } /></span>
                        </h3>

                        <div className="mt-2">
                            <span className="inline-block text-sm pr-2">{ newsItem.score } Points</span>

                            <span className="inline-block text-slate-600 text-sm items-center pr-2"> 
                                <DateOutput time={ newsItem.time } />
                            </span>

                            <span className="inline-block text-slate-600 text-sm items-center"> 
                                by 
                                <Link href="/user/[username]" as={`/user/${newsItem.by}`} className="hover:underline underline-offset-2 pl-[4px]">
                                { newsItem.by }
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="antialiased w-full max-w-5xl bg-white shadow-xl shadow-gray-100 border-gray p-4 mt-4">
                        <h3 className="flex space-y-4 px-2 ml-4 text-lg font-semibold text-gray-900">Comments</h3>

                        <div className="space-y-4">

                            { comments && comments.length > 0 ? (                                
                                <React.Fragment>
                                    { comments.map((commentId, index) => (
                                        <React.Fragment key={ index }>
                                            <SingleComment comment_id={ commentId } key={ index } />
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            ) : (
                                <>
                                    <p>No comments are currently available or added to this item.</p>  
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}