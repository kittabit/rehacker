import { use } from 'react';

import { getSingleNewsItem } from '../../..//lib/items';
  
export default async function Head({ params }) {

    // FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
    // var newsItem = use(getSingleNewsItem( params.slug ));
    
    return (
      <>
        <title>Item #{ params.slug } | Rehacker - HackerNews NextJS Clone</title>
        <link rel="canonical" href={`https://rehacker.xyz/item/${ params.slug }`} precedence="true" />
      </>
    )
}