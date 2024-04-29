import { useParams } from 'react-router-dom'

export const Friend = () => {
    const { friendId } = useParams()

    return <p>{friendId}</p>
}
