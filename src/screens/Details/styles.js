import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    zIndex: 1,
  },
  currentBid: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary
  }
});