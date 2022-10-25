import Link from 'next/link';

import DateOutput from '../global/DateOutput';
import DomainOutput from '../global/DomainOutput';

async function getSingleNewsItem(id) {

    const res = await fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty', { next: { revalidate: 60 } });
    return res.json();

}

export default async function SinglePost( props ) {
    const newsItem = await getSingleNewsItem( props.id );

    return (
        <>
            { newsItem &&
                <>
                    <div className="bg-white shadow-xl shadow-gray-100 w-full max-w-4xl px-5 py-4 border-b-2 border-grey" data-itemtype={ newsItem.type }>
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
                            <span className="bg-hn-orange text-white rounded-full px-3 py-1 text-sm">Score: { newsItem.score }</span>

                            <span className="text-slate-600 text-sm flex gap-1 items-center pr-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 512 512"><path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"/></svg>

                                <DateOutput time={ newsItem.time } />
                            </span>

                            <span className="text-slate-600 text-sm flex gap-1 items-center pr-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 640 512"><path d="M208 0C322.9 0 416 78.8 416 176C416 273.2 322.9 352 208 352C189.3 352 171.2 349.7 153.9 345.8C123.3 364.8 79.13 384 24.95 384C14.97 384 5.93 378.1 2.018 368.9C-1.896 359.7-.0074 349.1 6.739 341.9C7.26 341.5 29.38 317.4 45.73 285.9C17.18 255.8 0 217.6 0 176C0 78.8 93.13 0 208 0zM164.6 298.1C179.2 302.3 193.8 304 208 304C296.2 304 368 246.6 368 176C368 105.4 296.2 48 208 48C119.8 48 48 105.4 48 176C48 211.2 65.71 237.2 80.57 252.9L104.1 277.8L88.31 308.1C84.74 314.1 80.73 321.9 76.55 328.5C94.26 323.4 111.7 315.5 128.7 304.1L145.4 294.6L164.6 298.1zM441.6 128.2C552 132.4 640 209.5 640 304C640 345.6 622.8 383.8 594.3 413.9C610.6 445.4 632.7 469.5 633.3 469.9C640 477.1 641.9 487.7 637.1 496.9C634.1 506.1 625 512 615 512C560.9 512 516.7 492.8 486.1 473.8C468.8 477.7 450.7 480 432 480C350 480 279.1 439.8 245.2 381.5C262.5 379.2 279.1 375.3 294.9 369.9C322.9 407.1 373.9 432 432 432C446.2 432 460.8 430.3 475.4 426.1L494.6 422.6L511.3 432.1C528.3 443.5 545.7 451.4 563.5 456.5C559.3 449.9 555.3 442.1 551.7 436.1L535.9 405.8L559.4 380.9C574.3 365.3 592 339.2 592 304C592 237.7 528.7 183.1 447.1 176.6L448 176C448 159.5 445.8 143.5 441.6 128.2H441.6z"/></svg>
                                <Link href="/item/[id]" as={`/item/${newsItem.id}`} className="hover:underline underline-offset-2">        
                                    { newsItem.descendants } comments
                                </Link>
                            </span>

                            <span className="text-slate-600 text-sm flex gap-1 items-center"> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 512 512"><path d="M421.7 220.3l-11.3 11.3-22.6 22.6-205 205c-6.6 6.6-14.8 11.5-23.8 14.1L30.8 511c-8.4 2.5-17.5 .2-23.7-6.1S-1.5 489.7 1 481.2L38.7 353.1c2.6-9 7.5-17.2 14.1-23.8l205-205 22.6-22.6 11.3-11.3 33.9 33.9 62.1 62.1 33.9 33.9zM96 353.9l-9.3 9.3c-.9 .9-1.6 2.1-2 3.4l-25.3 86 86-25.3c1.3-.4 2.5-1.1 3.4-2l9.3-9.3H112c-8.8 0-16-7.2-16-16V353.9zM453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-14.5 14.5-22.6 22.6-11.3 11.3-33.9-33.9-62.1-62.1L314.3 67.7l11.3-11.3 22.6-22.6 14.5-14.5c25-25 65.5-25 90.5 0z"/></svg>
                                    
                                by { newsItem.by }
                            </span>
                        </div>
                    </div>
                   
                </>
            }
        </>
    )

}