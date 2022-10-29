import React from 'react';
import { use } from 'react';
import Link from 'next/link';

import DateOutput from '../../../components/global/DateOutput';
import DomainOutput from '../../../components/global/DomainOutput';
import SingleComment from '../../../components/comments/SingleComment';

import { getSingleNewsItem } from '../../../lib/items';

export default function SingleNewsItemPage({ params, searchParams }) {
    
    var newsItem = use(getSingleNewsItem( params.slug ));

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

                        <div className="items-center">             
                            <div className="flex gap-2">
                                <div className="col-span-1 text-xs">
                                    Created by <Link href="/user/[username]" as={`/user/${newsItem.by}`} className="hover:underline underline-offset-2">{ newsItem.by }</Link>
                                </div>

                                <div className="col-span-1 text-xs">
                                    <DateOutput time={ newsItem.time } />
                                </div>

                                <div className="col-span-1 text-xs">
                                    <Link href="/item/[id]" as={`/item/${newsItem.id}`} className="hover:underline underline-offset-2 text-xs">        
                                        { newsItem.descendants } comments
                                    </Link>
                                </div>
                            </div>                                            
                        </div>
                    </div>

                    <div className="antialiased w-full max-w-5xl bg-white shadow-xl shadow-gray-100 border-gray p-4 px-5 mt-4">
                        <h3 className="flex text-lg font-semibold text-gray-900 mb-2">Comments</h3>

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