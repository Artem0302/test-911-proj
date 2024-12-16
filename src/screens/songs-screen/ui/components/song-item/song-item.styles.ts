import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    marginTop: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: COLORS.light_gray,
    borderBottomWidth: 1,
  },
  name: {
    maxWidth: '80%',
  },
});
