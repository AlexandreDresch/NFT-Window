import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  subInfoContainer: {
    width: '100%',
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  peopleContainer: {
      flexDirection: 'row'
  },
  endDateContainer: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: '50%'
  },
  endDateText1: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary
  },
  endDateText2: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary
  },
  ethPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ethPriceImage: {
    width: 20,
    height: 20,
    marginRight: 2
  },
  ethPriceText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.primary
  }
});