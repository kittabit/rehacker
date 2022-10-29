export default function DateOutput( props ) {

    let unix_timestamp = props.time;
    var date = new Date(unix_timestamp * 1000);

    var dateString =
        ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
        ("00" + date.getDate()).slice(-2) + "/" +
        date.getFullYear() + " " +
        ("00" + date.getHours()).slice(-2) + ":" +
        ("00" + date.getMinutes()).slice(-2);

    return (
        <>
            <em className="text-xs">{dateString}</em>
        </>
    )

}