import {StyleSheet} from 'react-native';
import {COLORS, DEVICE_HEIGHT} from '@shared/constants';

export default StyleSheet.create({
  header: {
    width: '100%',
    height: DEVICE_HEIGHT * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light_gray,
  },
  image_wrapper: {
    flex: 1,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    borderRadius: 8,
  },
  button: {
    marginTop: 16,
    borderRadius: 16,
    width: '30%',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
