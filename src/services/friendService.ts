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
                            jobtitle: 'Head Chef',
                            rating: 3,
                            image: 'carmen',
                            location: 'Chelsea',
                            sector: 'Food & Beverage',
                        },
                        {
                            id: 'friend2',
                            name: 'Richard Jerimovich',
                            jobtitle: 'Executive Tailor',
                            rating: 4,
                            image: 'cus',
                            location: 'Victoria',
                            sector: 'Tailoring',
                        },
                        {
                            id: 'friend3',
                            name: 'Sydney Adamu',
                            jobtitle: 'Treasurer',
                            rating: 5,
                            image: 'sydney',
                            location: 'Kensington',
                            sector: 'Finance',
                        },
                    ],
                }),
            10,
        ),
    )
}
