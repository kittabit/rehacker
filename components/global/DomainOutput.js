export default function DomainOutput( props ) {

    if(props.url){
        var domain_name = (new URL(props.url));    
        domain_name = domain_name.hostname
    }else{
        var domain_name = "news.ycombinator.com";
    }

    return (
        <>
            ( {domain_name} )
        </>
    )

}