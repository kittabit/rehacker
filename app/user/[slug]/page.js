import React from 'react';
import { use } from 'react';

import DateOutput from '../../../components/global/DateOutput';
import LightweightItem from '../../../components/posts/LightweightItem';

import { getUserProfile } from '../../../lib/users';

export default function SingleNewsItemPage({ params }) {

    const userData = use(getUserProfile( params.slug ));

    return (
        <>            
            <main className="pt-0">          
                <div className="relative flex flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">                                    
                    <div className="bg-white shadow-xl shadow-gray-100 w-full max-w-5xl px-5 py-4 border-b-2 border-grey">

                        <h2 className="font-bold font-base mb-2 mt-2">Basic Information:</h2>

                        <div className="mb-4 lg:grid lg:mb-0 grid-cols-5">
                            <div className="col-span-1">Username:</div>
                            <div className="col-span-4">{ params.slug }</div>
                        </div>

                        <div className="mb-4 lg:grid lg:mb-0 grid-cols-5">
                            <div className="col-span-1">Created:</div>
                            <div className="col-span-4"><DateOutput time={ userData.created } /></div>
                        </div>

                        <div className="mb-4 lg:grid lg:mb-0 grid-cols-5">
                            <div className="col-span-1">Karma:</div>
                            <div className="col-span-4">{ userData.karma }</div>
                        </div>

                        { userData.about &&
                            <>
                                <div className="mb-4 lg:grid lg:mb-0 grid-cols-5">
                                    <div className="col-span-1">About:</div>
                                    <div className="col-span-4" dangerouslySetInnerHTML={{ __html: userData.about }}></div>
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