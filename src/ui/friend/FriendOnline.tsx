type Props = {
    online: boolean
}

export const FriendOnline = (props: Props) => {
    const { online } = props

    return (
        <svg
            height="10"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
            className="friend-online">
            <circle r="5" cx="5" cy="5" fill={online ? '#73d13d' : '#ff4d4f'} />
        </svg>
    )
}
