 export default async function Head({ params }) {
   
    return (
      <>
        <title>{ params.slug } | Rehacker - HackerNews NextJS Clone</title>
        <link rel="canonical" href={`/user/${ params.slug }`} precedence="true" />
      </>
    )

}