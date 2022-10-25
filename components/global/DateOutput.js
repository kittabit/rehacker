export default function DateOutput( props ) {

    let unix_timestamp = props.time;
    var date = new Date(unix_timestamp * 1000);
    var dateString = date.getUTCFullYear() +"/"+ (date.getUTCMonth()+1) +"/"+ date.getUTCDate() + " " + date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();

    return (
        <>
            {dateString}
        </>
    )

}