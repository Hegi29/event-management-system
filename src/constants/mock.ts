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
const MOCK_RETURN_LIST_ACTIVITY = {
    data: {
        "status": 200,
        "message": null,
        "data": [
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Create new event",
                "activityDescription": null,
                "activityName": "Yoshio Prince",
                "created": "08/06/2024 02:14:03.436",
                "pastTime": "5 mins ago"
            },
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Upload Evidence",
                "activityDescription": "Uploaded evidence ini xlsx on D.3",
                "activityName": "D.3",
                "created": "08/06/2024 02:11:50.776",
                "pastTime": "7 mins ago"
            },
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Upload Evidence",
                "activityDescription": "Uploaded evidence recording on A.1",
                "activityName": "A.1",
                "created": "08/06/2024 02:11:50.480",
                "pastTime": "7 mins ago"
            },
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Upload Evidence",
                "activityDescription": "Uploaded evidence ini 3gp on A.2",
                "activityName": "A.2",
                "created": "08/06/2024 02:11:50.404",
                "pastTime": "7 mins ago"
            },
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Upload Evidence",
                "activityDescription": "Uploaded evidence ini avi on C.3",
                "activityName": "C.3",
                "created": "08/06/2024 02:11:50.242",
                "pastTime": "7 mins ago"
            },
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Upload Evidence",
                "activityDescription": "Uploaded evidence ini wmv on C.1",
                "activityName": "C.1",
                "created": "08/06/2024 02:11:50.142",
                "pastTime": "7 mins ago"
            },
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Upload Evidence",
                "activityDescription": "Uploaded evidence ini jpeg on C.2",
                "activityName": "C.2",
                "created": "08/06/2024 02:11:50.059",
                "pastTime": "7 mins ago"
            },
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Create new event",
                "activityDescription": null,
                "activityName": "Dale House",
                "created": "08/06/2024 02:09:41.996",
                "pastTime": "9 mins ago"
            },
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Upload Evidence",
                "activityDescription": "Uploaded evidence ini xlsx on D.3",
                "activityName": "D.3",
                "created": "08/06/2024 02:07:25.263",
                "pastTime": "12 mins ago"
            },
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Upload Evidence",
                "activityDescription": "Uploaded evidence recording on A.1",
                "activityName": "A.1",
                "created": "08/06/2024 02:07:25.197",
                "pastTime": "12 mins ago"
            },
            {
                "user": "ehourigan0@spotify.com",
                "activityType": "Commented in",
                "activityDescription": "Tolong ditambahkan lebih banyak gambar",
                "activityName": "A.1",
                "created": "08/06/2024 02:07:25.197",
                "pastTime": "12 mins ago"
            }
        ],
        "totalPage": 13,
        "totalItem": 123,
        "pageNumber": 1,
        "pageSize": 10,
        "hasNextPage": true,
        "logEventId": null
    }
};
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
    MOCK_RETURN_LIST_ACTIVITY,
    TOP_VENUE_LIST,
    USERS
}