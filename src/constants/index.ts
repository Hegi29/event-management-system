const APP_TITLE = 'Nautical Nexus';
const BASE_URL = 'http://172.19.12.57:7132/Event/v1';
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
const DRAWER_POSITION = 'right';
const EVENT_DETAIL_TAB_IDX = 0;
const LIST_STATUS_EVENT = [
  { title: 'All Status' },
  { title: 'Waiting for Review' },
  { title: 'Under Review' },
  { title: 'Requesting Revision' },
  { title: 'Review Complete' }
];
const LIST_STATUS_SECTION = [
  { title: 'Health' },
  { title: 'Security' },
  { title: 'Safety' },
  { title: 'Environment' }
];
const LIST_STATUS_SUBMIT = [
  { title: 'All Status' },
  { title: 'Approved' },
  { title: 'Unsubmitted' },
  { title: 'Under Review' }
];
const LIST_STATUS_VENUE = [
  { title: 'All Status' },
  { title: 'Waiting for Review' },
  { title: 'Under Review' },
  { title: 'Request Expired' },
  { title: 'Registered Venue' }
];
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
const ROLE = {
  USER: '1',
  HEALTH_VERIFICATOR: '2',
  SECURITY_VERIFICATOR: '3',
  SAFETY_VERIFICATOR: '4',
  EG_VERIFICATOR: '5',
  SUPER_ADMIN: '6'
};
const MAX_LENGTH_CHAR = 275;
const MAX_LENGTH_COMMENT = 275;
const MASKING_PHONE_NO = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const MAX_SIZE_IMG_VENUE = 1 * 1024;
const MAX_SIZE_FILE_EVIDENCE = 10 * 1024;

export {
  APP_TITLE,
  BASE_URL,
  CREATE_EVENT_TAB,
  CREATE_VENUE_TAB,
  DRAWER_POSITION,
  EVENT_DETAIL_TAB_IDX,
  LIST_STATUS_EVENT,
  LIST_STATUS_SECTION,
  LIST_STATUS_SUBMIT,
  LIST_STATUS_VENUE,
  MASKING_PHONE_NO,
  MAX_LENGTH_CHAR,
  MAX_LENGTH_COMMENT,
  MAX_SIZE_IMG_VENUE,
  MAX_SIZE_FILE_EVIDENCE,
  NEXT,
  ROLE,
  REGEX_EMAIL,
  SUBTITLE_EVENT,
  TIMEOUT_AXIOS,
  TITLE_EVENT,
  TITLE_EVENT_DRAFT,
  TITLE_HOME_A,
  TITLE_HOME_B,
  TITLE_HOME_C,
  TITLE_HOME_D,
  TITLE_VENUE
}