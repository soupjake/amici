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
                            expertise: 'Food & Beverage',
                            operatingHours: '12-9',
                            online: true,
                        },
                        {
                            id: 'friend2',
                            name: 'Richard Jerimovich',
                            jobtitle: 'Executive Tailor',
                            rating: 4,
                            image: 'cus',
                            location: 'Victoria',
                            expertise: 'Tailoring',
                            operatingHours: '8-4',
                            online: false,
                        },
                        {
                            id: 'friend3',
                            name: 'Sydney Adamu',
                            jobtitle: 'Treasurer',
                            rating: 5,
                            image: 'sydney',
                            location: 'Kensington',
                            expertise: 'Finance',
                            operatingHours: '9-5',
                            online: true,
                        },
                    ],
                }),
            10,
        ),
    )
}
