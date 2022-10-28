import React from 'react';
import { use } from 'react';
import Link from 'next/link';

import DateOutput from '../../../components/global/DateOutput';
import DomainOutput from '../../../components/global/DomainOutput';
import SingleComment from '../../../components/comments/SingleComment';
import LightweightItem from '../../../components/posts/LightweightItem';

async function getUserData(id) {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/user/' + id + '.json');
    return res.json();

}

export default function SingleNewsItemPage({ params, searchParams }) {
    var userData = use(getUserData( params.slug ));

    return (
        <>            
            <main className="pt-0">          
                <div className="relative flex flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">                                    
                    <div className="bg-white shadow-xl shadow-gray-100 w-full max-w-5xl px-5 py-4 border-b-2 border-grey">

                        <h2 className="font-bold font-base mb-2 mt-2">Basic Information:</h2>

                        <div className="grid grid-cols-5">
                            <div className="col-span-1">Username:</div>
                            <div className="col-span-4">{ params.slug }</div>
                        </div>

                        <div className="grid grid-cols-5">
                            <div className="col-span-1">Created:</div>
                            <div className="col-span-4"><DateOutput time={ userData.created } /></div>
                        </div>

                        <div className="grid grid-cols-5">
                            <div className="col-span-1">Karma:</div>
                            <div className="col-span-4">{ userData.karma }</div>
                        </div>

                        { userData.about &&
                            <>
                                <div className="grid grid-cols-5">
                                    <div className="col-span-1">About:</div>
                                    <div className="col-span-4">{ userData.about }</div>
                                </div>
                            </>
                        }

                        {userData.submitted &&
                            <>
                                <div className="mt-2">
                                    <h2 className="font-bold font-base mb-2 mt-2">Submissions:</h2>

                                    <div className="">
                                        { userData.submitted && userData.submitted.map((item, index) => (
                                            <LightweightItem id={ item } key={ index } />
                                        )) }
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </main>
        </>
    )

}