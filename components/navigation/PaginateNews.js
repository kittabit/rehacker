'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function PaginateNews( props ) {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    var p = searchParams.get('p');
    if( p == null ) {
        p = 0;
    }

    var next_page = parseInt(p) + 1;
    var prev_page = parseInt(p) - 1;

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
                        { p } / 3
                    </div>

                    <div className="col-span-2 text-left">
                        { next_page <= 3 ? (
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