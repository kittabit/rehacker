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
                            <div className="bg-white hover:bg-slate-100 transition ease-in-out delay-150 shadow-xl shadow-gray-100 w-full max-w-4xl px-5 py-4 border-b-2 border-grey" data-itemtype={ newsItem.type }>
                                <div className="grid grid-cols-10">
                                    <div className="col-span-1">
                                        <div className="bg-hn-orange text-white rounded-full px-3 py-1 text-sm w-4/5 text-center pt-4 pb-4">
                                            <span className="block text-lg">{ newsItem.score }</span>
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

                                        <div className="flex items-center gap-3 mt-2">                                    

                                            <span className="text-slate-600 text-sm flex gap-1 items-center pr-2"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 512 512"><path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"/></svg>

                                                <DateOutput time={ newsItem.time } />
                                            </span>

                                            <span className="text-slate-600 text-sm flex gap-1 items-center pr-2"> 
                                                <Link href="/item/[id]" as={`/item/${newsItem.id}`} className="hover:underline underline-offset-2">        
                                                    { newsItem.descendants } comments
                                                </Link>

                                                | by { newsItem.by }
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

