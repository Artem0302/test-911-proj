import {Dimensions, Platform} from 'react-native';
import {hasDynamicIsland, hasNotch} from 'react-native-device-info';

// Display
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const MAX_WIDTH_DEVICE = 428;

// System, device & settings
export const IS_IOS = Platform.OS === 'ios';
export const IS_NOTCH = hasNotch();
export const IS_DYNAMIC_ISLAND = hasDynamicIsland();
