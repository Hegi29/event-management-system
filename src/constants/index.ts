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
const BASE_URL = 'http://172.19.12.57:81/Event/v1';
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
const NEXT = 'next';
const SUBTITLE_EVENT = 'Track, manage and forecast your event';
const TIMEOUT_AXIOS = 5000;
const TITLE_EVENT = 'Event';
const TITLE_EVENT_DRAFT = 'Event Draft';
const TITLE_HOME_A = 'Event Requesting Revision';
const TITLE_HOME_B = 'Top Venue';
const TITLE_HOME_C = 'Event';
const TITLE_HOME_D = 'Activity';
const TITLE_VENUE = 'Venue';

export {
  ACTIVITY_LIST,
  APP_TITLE,
  BASE_URL,
  EVENT_DETAIL_TAB_IDX,
  TIMEOUT_AXIOS,
  TITLE_EVENT,
  TITLE_EVENT_DRAFT,
  TITLE_HOME_A,
  TITLE_HOME_B,
  TITLE_HOME_C,
  TITLE_HOME_D,
  SUBTITLE_EVENT,
  CREATE_EVENT_TAB,
  CREATE_VENUE_TAB,
  NEXT,
  TITLE_VENUE
}