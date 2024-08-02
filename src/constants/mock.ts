const COORDINATION_MEETING_LIST = [
    {
        eventId: 1,
        eventName: 'Rapat Koordinasi dan Evaluasi TNI - AL',
        eventPlace: 'R.Hotel Rancamaya Golf & Country Club',
        eventDate: '6 Jan 2024 - 9 Jan 2024'
    },
    {
        eventId: 2,
        eventName: 'Rapat Koordinasi dan Evaluasi TNI - AL',
        eventPlace: 'R.Hotel Rancamaya Golf & Country Club',
        eventDate: '10 Jan 2024'
    },
    {
        eventId: 3,
        eventName: 'Rapat Koordinasi dan Evaluasi TNI - AL',
        eventPlace: 'R.Hotel Rancamaya Golf & Country Club',
        eventDate: '13 Jan 2024'
    }
];
const EVENT_LIST = [
    {
        eventId: 1,
        venue: {
            images: {
                data: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg']
            },
            province: 'Bogor, Jawa Barat'
        },
        activityName: 'Rapat Koordinasi dan Evaluasi TNI-AL',
        venueName: 'R.Hotel Rancamaya Golf & Country Club',
        activityStartDate: '22 Mei - 28 Mei 2024',
        status: 'Requesting revision by Security, SSA & Health',
        created: '24 April 2024'
    },
    {
        eventId: 2,
        venue: {
            images: {
                data: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg']
            },
            province: 'Bogor, Jawa Barat'
        },
        activityName: 'Rapat Koordinasi dan Evaluasi TNI-AL',
        venueName: 'R.Hotel Rancamaya Golf & Country Club',
        activityStartDate: '22 Mei - 28 Mei 2024',
        status: 'Requesting revision by Security, SSA & Health',
        created: '24 April 2024'
    },
    {
        eventId: 3,
        venue: {
            images: {
                data: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg']
            },
            province: 'Bogor, Jawa Barat'
        },
        activityName: 'Rapat Koordinasi dan Evaluasi TNI-AL',
        venueName: 'R.Hotel Rancamaya Golf & Country Club',
        activityStartDate: '22 Mei - 28 Mei 2024',
        status: 'Requesting revision by Security, SSA & Health',
        created: '24 April 2024'
    },
    {
        eventId: 4,
        venue: {
            images: {
                data: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg']
            },
            province: 'Bogor, Jawa Barat'
        },
        activityName: 'Rapat Koordinasi dan Evaluasi TNI-AL',
        venueName: 'R.Hotel Rancamaya Golf & Country Club',
        activityStartDate: '22 Mei - 28 Mei 2024',
        status: 'Requesting revision by Security, SSA & Health',
        created: '24 April 2024'
    },
    {
        eventId: 5,
        venue: {
            images: {
                data: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg']
            },
            province: 'Bogor, Jawa Barat'
        },
        activityName: 'Rapat Koordinasi dan Evaluasi TNI-AL',
        venueName: 'R.Hotel Rancamaya Golf & Country Club',
        activityStartDate: '22 Mei - 28 Mei 2024',
        status: 'Requesting revision by Security, SSA & Health',
        created: '24 April 2024'
    }
];
const EVENT_LIST_DRAFT = EVENT_LIST.slice(0, 1);
const TOP_VENUE_LIST = [
    {
        venueId: 1,
        images: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg'],
        venueName: 'Hotel Rancamaya Golf & Country Club',
        venueAddress: 'Bogor, Jawa Barat',
        phoneNumber: '(0251) 8248899',
        totalUsed: 15,
        isVerified: true,
        verifiedDate: '24 April 2024',
        badges: [
            'HSSE Rating 100%',
            'Health 100%',
            'Security 98%',
            'Safety 98%',
            'Environment 98%'
        ]
    }
];
const USERS = [
    {
        "id": "7691e042-aac7-488d-92e9-dd891d819a4d",
        "first_name": "Elwira",
        "last_name": "Hourigan",
        "full_name": "Elwira Hourigan",
        "username": "ehourigan0",
        "email": "ehourigan0@spotify.com",
        "password": "elwirahourigan47",
        "role_name": "admin",
        "role_id": 1,
        "photo_profile_url": "https://robohash.org/magnamimpeditcupiditate.png?size=50x50&set=set1"
    },
    {
        "id": "4c31c5a4-b5dd-4d38-b128-f7314ae54598",
        "first_name": "Cloris",
        "last_name": "Greenshields",
        "full_name": "Cloris Greenshields",
        "username": "cgreenshields1",
        "email": "cgreenshields1@nymag.com",
        "password": "clorisgreenshields26",
        "role_name": "health verificator",
        "role_id": 2,
        "photo_profile_url": "https://robohash.org/impeditsequidolorum.png?size=50x50&set=set1"
    },
    {
        "id": "4f02196a-703e-4261-af36-fcd323c29f72",
        "first_name": "Guthry",
        "last_name": "Wishkar",
        "full_name": "Guthry Wishkar",
        "username": "gwishkar2",
        "email": "gwishkar2@soundcloud.com",
        "password": "guthrywishkar68",
        "role_name": "security verificator",
        "role_id": 3,
        "photo_profile_url": "https://robohash.org/quiestnesciunt.png?size=50x50&set=set1"
    },
    {
        "id": "82d4daec-3069-4d08-b2a0-6ed8cd22dfd3",
        "first_name": "Gabrielle",
        "last_name": "Peller",
        "full_name": "Gabrielle Peller",
        "username": "gpeller3",
        "email": "gpeller3@freewebs.com",
        "password": "gabriellepeller41",
        "role_name": "safety verificator",
        "role_id": 4,
        "photo_profile_url": "https://robohash.org/reiciendisofficiatempora.png?size=50x50&set=set1"
    },
    {
        "id": "0dc40fd5-2829-42fa-b5c5-c818a6fe14e1",
        "first_name": "Osbourn",
        "last_name": "Vogel",
        "full_name": "Osbourn Vogel",
        "username": "ovogel4",
        "email": "ovogel4@nationalgeographic.com",
        "password": "osbournvogel25",
        "role_name": "e&g verificator",
        "role_id": 5,
        "photo_profile_url": "https://robohash.org/atnihilomnis.png?size=50x50&set=set1"
    },
    {
        "id": "58c0c23b-6b27-44be-a1da-7931946d79f1",
        "first_name": "John",
        "last_name": "Doe",
        "full_name": "John Doe",
        "username": "johndoe7",
        "email": "johndoe7@mail.com",
        "password": "johndoe7",
        "role_name": "super admin",
        "role_id": 6,
        "photo_profile_url": "https://robohash.org/magnamimpeditcupiditate.png?size=50x50&set=set1"
    }
];

export {
    COORDINATION_MEETING_LIST,
    EVENT_LIST,
    EVENT_LIST_DRAFT,
    TOP_VENUE_LIST,
    USERS
}