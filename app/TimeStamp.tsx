"use client"
import TimeAgo from "react-timeago"
type Props = {
    time:string
}

function TimeStamp({time}: Props) {
    return <TimeAgo date={time} />
}

export default TimeStamp