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

  export {
    COORDINATION_MEETING_LIST,
    TOP_VENUE_LIST,
    EVENT_LIST,
    EVENT_LIST_DRAFT
  }