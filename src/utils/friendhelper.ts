import carmen from '../assets/carmen.jpg'
import cus from '../assets/cus.jpg'
import sydney from '../assets/sydney.jpg'
import { Friend } from '../types/friend'

export const mapFriendsToOptions = (friends: Friend[]) =>
    friends.map((friend) => ({
        value: friend.id,
        label: `${friend.name} - ${friend.jobtitle}`,
    }))

export const getFriendImage = (image: string) => {
    let imageSrc = carmen

    if (image === 'cus') {
        imageSrc = cus
    }

    if (image === 'sydney') {
        imageSrc = sydney
    }

    return imageSrc
}
