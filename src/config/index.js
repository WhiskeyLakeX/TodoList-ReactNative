// import {getScreenWidth} from '../utils/layout/layout';

// NAME
const DB_NAME = 'db_default';
const STORE_NAME = 'state';

// VERSION
const VERSION = {
  ANDROID: '0.0.1',
  IOS: '0.0.1',
};

// export const draggingThreshold = getScreenWidth() * 0.01;
export const heightHeaderBar = 47;

// COLOR
export const COLOR_CONFIG = {
  APPLE_ICON: '#23262F',
  FACEBOOK_ICON: '#256BB3',
  GOOGLE_ICON: '#E05347',
  LINKEDIN_ICON: '#0274B3',
  TWITTER_ICON: '#1CA1F1',
  TRENDING_ICON: '#E25141',
  LATEST_ICON: '#F25962',

  // App
  SCREEN_TEXT_TITLE: '#183153',
  SCREEN_TEXT_GENERAL: '#183153',
  // APP_TEXT_TITLE:

  // Task item
  TASK_ITEM_CONTAINER_BACKGROUND: '#ffffff',
  TASK_ITEM_CONTAINER_BORDER: '#D4D4D4',
  TASK_ITEM_SHADOW: '#000',

  BACKGROUND_LIGHT: '#e9eaee',
  BACKGROUND_DARK: '#1e1530',

  ICON_GENERAL: '#183153',

  BORDER_TEXT_INPUT: '#D4D4D4',

  INPUT_BACKGROUND: '#ffffff',
};

// NETWORK
const NETWORK_CONFIG = {
  HOST: 'http://kanban.tinasoft.vn:81/',
  API_BASE_URL: 'http://kanban.tinasoft.vn:81/api',
  TIMEOUT: 10000,
  RETRY: false,
  DISPLAY_ERROR: true,
  USE_TOKEN: true,
  USE_TOKEN_LIVE: false,
  WITH_METADATA: false,
};

export default {
  DB_NAME,
  STORE_NAME,
  NETWORK_CONFIG,
  COLOR_CONFIG,
  VERSION,
  // draggingThreshold,
};
