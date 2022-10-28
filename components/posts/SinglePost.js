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
                                <div className="grid grid-cols-10">
                                    <div className="col-span-1">
                                        <div className="bg-hn-orange text-white rounded-full px-3 py-1 text-sm w-4/5 text-center pt-4 pb-4">
                                            <span className="block text-xl w-full text-center">{ newsItem.score }</span>
                                        </div>
                                    </div>

                                    <div className="col-span-9">
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
                                            <span className="text-slate-600 text-xs items-center pr-2"> 
                                                by <Link href="/user/[username]" as={`/user/${newsItem.by}`} className="hover:underline underline-offset-2">{ newsItem.by }</Link>

                                                <span className="pl-[5px] text-xs">
                                                    | <DateOutput time={ newsItem.time } />
                                                </span>

                                                <span className="pl-2 text-xs">
                                                    | <Link href="/item/[id]" as={`/item/${newsItem.id}`} className="hover:underline underline-offset-2 text-xs">        
                                                        { newsItem.descendants } comments
                                                    </Link>
                                                </span>
                                            </span>
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

