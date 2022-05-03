import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../../constants';

export const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  descriptionContainer: {
    marginVertical: SIZES.extraLarge * 1.5
  },
  descriptionTitle: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary
  },
  descriptionTextContainer: {
    marginTop: SIZES.base
  },
  descriptionText: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: SIZES.large
  },
  readMore: {
    fontSize: SIZES.small,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  }
});