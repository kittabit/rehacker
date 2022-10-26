'use client';

import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

export default function NavLinks( props ) {

    const pathname = usePathname();

    return (
        <>
            <li className="text-white">
                <Link href="/" className="hover:underline underline-offset-2">
                    <Image src="/hn-logo.svg" width="25" height="25" className="logo-color" alt="Rehacker" />
                </Link>
            </li>

            <li className="text-white">
                <Link href="/" className={`hover:underline underline-offset-2 ${pathname == "/" ? "font-bold" : ""}`}>
                    Top
                </Link>
            </li>

            <li className="text-white">
                <Link href="/new" className={`hover:underline underline-offset-2 ${pathname == "/new" ? "font-bold" : ""}`}>
                    New
                </Link>
            </li>

            <li className="text-white">
                <Link href="/show" className={`hover:underline underline-offset-2 ${pathname == "/show" ? "font-bold" : ""}`}>
                    Show
                </Link>
            </li>

            <li className="text-white">
                <Link href="/ask" className={`hover:underline underline-offset-2 ${pathname == "/ask" ? "font-bold" : ""}`}>
                    Ask
                </Link>
            </li>

            <li className="text-white">
                <Link href="/jobs" className={`hover:underline underline-offset-2 ${pathname == "/jobs" ? "font-bold" : ""}`}>
                    Jobs
                </Link>
            </li>
        </>
    )

}