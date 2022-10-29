'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import DateOutput from '../global/DateOutput';
import ThreadedComments from './ThreadedComments'

export default function SingleComment( props ) {

    const [commentData, setCommentData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const [showCommentThread, setShowCommentThread] = useState(false)

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/item/' + props.comment_id + '.json')
          .then((res) => res.json())
          .then((data) => {
            setCommentData(data)
            setIsLoaded(true)
          })
    }, [ props.comment_id ])

    function toggleThread() {
        setShowCommentThread(!showCommentThread)
    }
    
    return (
        <>  
            { isLoaded && commentData.by &&
                <>
                    <div className="flex" data-comment_id={ props.comment_id }>
                        <div className="flex-1 sm:px-6 sm:py-2 leading-relaxed">
                            <strong>
                                <Link href="/user/[username]" as={`/user/${commentData.by}`} className="hover:underline underline-offset-2">
                                    { commentData.by }
                                </Link>        
                            </strong> 
                            <span className="text-xs text-gray-400 pl-2"><DateOutput time={ commentData.time } /></span>

                            { commentData.deleted || commentData.dead ? (
                                <>
                                    <div className="text-sm leading-7 [&>p]:mb-1.5 [&>a]:underline"><del>Deleted.</del></div>
                                </>
                            ) : (
                                <>
                                    <div className="text-sm leading-7 [&>p]:mb-1.5 [&>a]:underline lg:w-11/12" dangerouslySetInnerHTML={{ __html: commentData.text }}></div>
                                </>
                            ) }

                            { commentData.kids &&
                                <>
                                    <div className="mt-4 flex items-center">
                                        <button className="text-sm text-gray-800 font-semibold" onClick={ toggleThread }>
                                             {showCommentThread ? 'Hide Comment Replies' : 'Show Comment Replies'}
                                        </button>
                                    </div>
                                    
                                    { showCommentThread &&
                                        <>
                                            <div className="space-y-4 mt-2">
                                                {commentData.kids.map((comment_id) => (
                                                    <ThreadedComments key={comment_id} comment_id={comment_id} />
                                                ))}
                                            </div>
                                        </>
                                    }
                                </>
                            }

                        </div>
                    </div> 
                </>
            }
        </>
    )

}