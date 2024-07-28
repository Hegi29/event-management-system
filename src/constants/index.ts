const ACTIVITY_LIST = [
  {
    activityId: 1,
    imageUser: '',
    userName: 'Olivia Rhye',
    createdAt: '2 mins ago',
    type: 'Create new event',
    eventName: 'Rapat Koordinasi dan Evaluasi TNI-AL',
    activity: ''
  },
  {
    activityId: 2,
    imageUser: '',
    userName: 'Djuri Masjan',
    createdAt: '2 mins ago',
    type: 'Commented in',
    eventName: 'Rapat Koordinasi dan Evaluasi TNI-AL',
    activity: 'Tolong upload gambar yang lebih jelas. Terima kasih'
  },
  {
    activityId: 3,
    imageUser: '',
    userName: 'Djuri Masjan',
    createdAt: '2 mins ago',
    type: 'Commented in',
    eventName: 'Rapat Koordinasi dan Evaluasi TNI-AL',
    activity: 'Tolong ditambahkan lebih banyak gambar'
  },
  {
    activityId: 4,
    imageUser: '',
    userName: 'Olivia Rhye',
    createdAt: '2 mins ago',
    type: 'Create new event',
    eventName: 'Rapat Koordinasi dan Evaluasi TNI-AL',
    activity: ''
  },
];
const APP_TITLE = 'Nautical Nexus';
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
const CREATE_EVENT_TAB = {
  EVENT_DETAIL: 0,
  VENUE_DETAIL: 1,
  HEALTH: 2,
  SECURITY: 3,
  SAFETY: 4,
  ENVIRONMENT: 5
};
const CREATE_VENUE_TAB = {
  VENUE_DETAIL: 0,
  HEALTH: 1,
  SECURITY: 2,
  SAFETY: 3,
  ENVIRONMENT: 4
};
const EVENT_DETAIL_TAB_IDX = 0;
const EVENT_LIST = [
  {
    eventId: 1,
    images: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg'],
    title: 'Rapat Koordinasi dan Evaluasi TNI-AL',
    venueName: 'R.Hotel Rancamaya Golf & Country Club',
    date: '22 Mei - 28 Mei 2024',
    province: 'Bogor, Jawa Barat',
    status: 'Requesting revision by Security, SSA & Health',
    submit_date: '24 April 2024'
  },
  {
    eventId: 2,
    images: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg'],
    title: 'Rapat Koordinasi dan Evaluasi TNI-AL',
    venueName: 'R.Hotel Rancamaya Golf & Country Club',
    date: '22 Mei - 28 Mei 2024',
    province: 'Bogor, Jawa Barat',
    status: 'Requesting revision by Security, SSA & Health',
    submit_date: '24 April 2024'
  },
  {
    eventId: 3,
    images: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg'],
    title: 'Rapat Koordinasi dan Evaluasi TNI-AL',
    venueName: 'R.Hotel Rancamaya Golf & Country Club',
    date: '22 Mei - 28 Mei 2024',
    province: 'Bogor, Jawa Barat',
    status: 'Requesting revision by Security, SSA & Health',
    submit_date: '24 April 2024'
  },
  {
    eventId: 4,
    images: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg'],
    title: 'Rapat Koordinasi dan Evaluasi TNI-AL',
    venueName: 'R.Hotel Rancamaya Golf & Country Club',
    date: '22 Mei - 28 Mei 2024',
    province: 'Bogor, Jawa Barat',
    status: 'Requesting revision by Security, SSA & Health',
    submit_date: '24 April 2024'
  },
  {
    eventId: 5,
    images: ['https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg'],
    title: 'Rapat Koordinasi dan Evaluasi TNI-AL',
    venueName: 'R.Hotel Rancamaya Golf & Country Club',
    date: '22 Mei - 28 Mei 2024',
    province: 'Bogor, Jawa Barat',
    status: 'Requesting revision by Security, SSA & Health',
    submit_date: '24 April 2024'
  }
];
const EVENT_LIST_DRAFT = EVENT_LIST.slice(0, 1);
const NEXT = 'next';
const SUBTITLE_EVENT = 'Track, manage and forecast your event';
const TITLE_EVENT = 'Event';
const TITLE_EVENT_DRAFT = 'Event Draft';
const TITLE_HOME_A = 'Event Requesting Revision';
const TITLE_HOME_B = 'Top Venue';
const TITLE_HOME_C = 'Event';
const TITLE_HOME_D = 'Activity';
const TITLE_VENUE = 'Venue';
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
  ACTIVITY_LIST,
  APP_TITLE,
  COORDINATION_MEETING_LIST,
  EVENT_DETAIL_TAB_IDX,
  TITLE_EVENT,
  TITLE_EVENT_DRAFT,
  TITLE_HOME_A,
  TITLE_HOME_B,
  TITLE_HOME_C,
  TITLE_HOME_D,
  TOP_VENUE_LIST,
  SUBTITLE_EVENT,
  EVENT_LIST,
  EVENT_LIST_DRAFT,
  CREATE_EVENT_TAB,
  CREATE_VENUE_TAB,
  NEXT,
  TITLE_VENUE
}