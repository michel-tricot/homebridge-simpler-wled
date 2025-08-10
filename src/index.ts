import { API } from 'homebridge';
import { WLEDPlatform } from './wled-platform.js';
import { PLUGIN_NAME, PLATFORM_NAME } from './settings.js';

export default (api: API): void => {
  api.registerPlatform(PLUGIN_NAME, PLATFORM_NAME, WLEDPlatform);
};