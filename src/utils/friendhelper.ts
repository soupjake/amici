import { Friend } from '../types/friend'

export const mapFriendsToOptions = (friends: Friend[]) =>
    friends.map((friend) => ({
        value: friend.id,
        label: `${friend.name} - ${friend.jobtitle}`,
    }))
