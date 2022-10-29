'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link';

import DateOutput from '../global/DateOutput';

export default function ThreadedComments( props ) {
    
    const [commentData, setCommentData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/item/' + props.comment_id + '.json')
          .then((res) => res.json())
          .then((data) => {
            setCommentData(data)
            setIsLoaded(true)
          })
    }, [ props.comment_id ])

    return (
        <>  
            { isLoaded && commentData.by &&
                <>
                    <div className="flex">
                        <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                            <strong>
                                <Link href="/user/[username]" as={`/user/${commentData.by}`} className="hover:underline underline-offset-2">
                                    { commentData.by }
                                </Link>
                            </strong> 
                            <span className="text-xs text-gray-400 pl-2"><DateOutput time={ commentData.time } /></span>
                            <div className="text-sm leading-7 [&>p]:mb-1.5 lg:w-11/12" dangerouslySetInnerHTML={{ __html: commentData.text }}></div>
                        </div>
                    </div>
                </>
            }
        </>
    )

}