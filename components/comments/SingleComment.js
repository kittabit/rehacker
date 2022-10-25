import { comment } from 'postcss';
import { use } from 'react';

import DateOutput from '../global/DateOutput';

async function getComment(id) {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty');
    
    try {
        return res.json();
    } catch (e) {
        return false;
    }


}

export default function SingleComment( props ) {

    var commentItem = use(getComment( props.comment_id ));

    return (
        <>  
            { commentItem.by &&
                <>
                    <div className="bg-white shadow-xl shadow-gray-100 w-full max-w-4xl px-5 py-4 border-b-2 border-grey">
                        <div className="relative flex gap-4 ">
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between">
                                    <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                                        { commentItem.by }
                                        <span className="text-gray-400 text-sm ml-2"><DateOutput time={ commentItem.time } /></span>    
                                    </p>
                                </div>                        
                            </div>
                        </div>
                        { commentItem.text &&
                            <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: commentItem.text }} />
                        }
                    </div>
                </>
            }
        </>
    )

}