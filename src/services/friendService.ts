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
                            operatingHours: '12pm - 9pm',
                            online: true,
                            amiciFor: '2+ years',
                            services:
                                'I wanna cook for people and make them happy and hive them the best bacon on earth',
                            promotions: [
                                '50% bacon',
                                'queue jump',
                                'personalised swearing',
                                'coupon: 123-BACON-456',
                            ],
                        },
                        {
                            id: 'friend2',
                            name: 'Richard Jerimovich',
                            jobtitle: 'Executive Tailor',
                            rating: 4,
                            image: 'cus',
                            location: 'Victoria',
                            expertise: 'Tailoring',
                            operatingHours: '8am - 4pm',
                            online: false,
                            amiciFor: '1 year',
                            services: 'I wear suits now. Call me cus',
                            promotions: [],
                        },
                        {
                            id: 'friend3',
                            name: 'Sydney Adamu',
                            jobtitle: 'Treasurer',
                            rating: 5,
                            image: 'sydney',
                            location: 'Kensington',
                            expertise: 'Finance',
                            operatingHours: '9am - 5pm',
                            online: true,
                            amiciFor: '5 months',
                            services:
                                "Do I have access to $500 bucks? I absolutely do. I'm a 43 year old man",
                            promotions: ['free $500', 'money laundering'],
                        },
                    ],
                }),
            10,
        ),
    )
}
