import { Friend } from '../types/friend'

export function fetchFriends() {
    return new Promise<{ data: Friend[] }>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    data: [
                        {
                            id: 'friend1',
                            name: 'Carmen Berzatto',
                            jobtitle: 'Chef',
                            rating: 3,
                            image: 'carmen',
                        },
                        {
                            id: 'friend2',
                            name: 'Richard Jerimovich',
                            jobtitle: 'Barber',
                            rating: 4,
                            image: 'cus',
                        },
                        {
                            id: 'friend3',
                            name: 'Sydney Adamu',
                            jobtitle: 'Tailor',
                            rating: 5,
                            image: 'sydney',
                        },
                    ],
                }),
            10,
        ),
    )
}
