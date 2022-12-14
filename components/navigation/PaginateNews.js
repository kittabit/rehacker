'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function PaginateNews( props ) {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    var maxPage = 5;
    if( pathname == "/" ) {
        var maxPage = 5;
    } else if( pathname == "/news" ) {
        var maxPage = 5;
    } else if ( pathname == "/show" ) {
        var maxPage = 2;
    } else if ( pathname == "/ask" ) {
        var maxPage = 3;
    } else if ( pathname == "/jobs" ) {
        var maxPage = 3;
    } else {
        var maxPage = 5;
    }

    var p = searchParams.get('p');
    if( p == null ) {
        p = 0;
    }
    var p_output = parseInt(p) + 1;
 
    var next_page = parseInt(p) + 1;
    var prev_page = parseInt(p) - 1;

    // GHETTO TEMP SOLUTION
    if(!pathname.includes("/item/") && !pathname.includes("/user/")) {
        return (
            <>
                <div className="bg-white w-full max-w-4xl mx-auto pt-2 pb-2">
                    <div className="grid grid-cols-5 text-sm">
                        <div className="col-span-2 text-right">
                            { prev_page >= 0 ? (
                                <>
                                    <Link href={`${pathname}?p=${prev_page}`}>
                                        <button>&lt; previous</button>
                                    </Link>                            
                                </>
                            ) : (
                                <>                        
                                    <span className="block text-slate-500	">&lt; previous</span>
                                </>
                            )}
                        </div>

                        <div className="col-span-1 text-center">
                            { p_output } / { maxPage }
                        </div>

                        <div className="col-span-2 text-left">
                            { next_page < maxPage ? (
                                <>
                                    <Link href={`${pathname}?p=${next_page}`}>
                                        <button>next &gt;</button>
                                    </Link>                            
                                </>
                            ) : (
                                <>                        
                                    <span className="block text-slate-500">next &gt;</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )
    }                                
}