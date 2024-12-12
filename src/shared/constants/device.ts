import {Dimensions, Platform} from 'react-native';

// Display
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const MAX_WIDTH_DEVICE = 428;

// System, device & settings
export const IS_IOS = Platform.OS === 'ios';
