'use client';

import Link from 'next/link';

import DateOutput from '../global/DateOutput';
import DomainOutput from '../global/DomainOutput';

import useSWR from 'swr'
import React, { useState, useEffect } from "react";

export default function LightweightItem( props ) {

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
                    { newsItem && newsItem.type == "story" && newsItem.title &&
                        <>
                            <div className="py-2 bg-white hover:bg-slate-100 transition ease-in-out delay-150 border-b transition-all duration-300 ease-in-out" data-id={ props.id }>
                                <span className="lg:px-2">
                                    <Link href="/item/[id]" as={`/item/${newsItem.id}`} className="hover:underline underline-offset-2">
                                        { newsItem.title }
                                    </Link>
                                    <span className="pl-2">- <DateOutput time={ newsItem.time } /></span>
                                </span>
                            </div>
                        </>
                    }
                </>
            )}
        </>
    )

}

