'use client';

import Link from 'next/link';

import DateOutput from '../global/DateOutput';
import DomainOutput from '../global/DomainOutput';

import useSWR from 'swr'
import React, { useState, useEffect } from "react";

export default function SinglePost( props ) {

    const [isLoading, setIsLoading] = React.useState(1);
    const [newsItem, setNewsItem] = React.useState(0);

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://hacker-news.firebaseio.com/v0/item/' + props.id + '.json', fetcher)

    useEffect(() => {
        setNewsItem(data);
        setIsLoading(0);
    }, [isLoading, data, newsItem]);

    return (
        <>
            { isLoading == 1 ? (
                <>
                    <div className="flex justify-center items-center mb-2">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    { newsItem &&
                        <>
                            <div className="bg-white hover:bg-slate-100 transition ease-in-out delay-150 shadow-xl shadow-gray-100 w-full max-w-5xl px-5 py-4 border-b-2 border-grey" data-itemtype={ newsItem.type }>
                                <div className="grid grid-cols-10 items-center">
                                    <div className="hidden lg:block col-span-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-hn-orange inline-block" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                        <span className="inline-block text-xl pl-2 relative top-[3px]">{ newsItem.score }</span>
                                    </div>

                                    <div className="col-span-10 lg:col-span-9 items-center">
                                        <h3 className="font-bold font-base mt-px">
                                            { newsItem.url ? (
                                                <>
                                                    <a href={ newsItem.url } className="hover:underline underline-offset-2" target="_blank" rel="noopener noreferrer">{ newsItem.title }</a>
                                                </>
                                            ) : (
                                                <>
                                                    <Link href="/item/[id]" as={`/item/${newsItem.id}`} className="hover:underline underline-offset-2">
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
                                </div>
                            </div>
                        
                        </>
                    }
                </>
            )}
        </>
    )

}

