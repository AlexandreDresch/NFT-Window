import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 90,
    height: 25
  },
  profileContainer: {
    width: 45,
    height: 45
  },
  profileImage: {
    width: '100%',
    height: '100%'
  },
  badgeImage: {
    position: 'absolute',
    width: 15,
    height: 15,
    bottom: 0,
    right: 0
  },
  greatingContainer: {
    marginVertical: SIZES.font
  },
  greatingText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white
  },
  messageText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white, 
    marginTop: SIZES.base / 2
  },
  searchContainer: {
    marginTop: SIZES.font
  },
  searchContent: {
    width: '100%',
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2
  },
  searchImage: {
    width: 20,
    height: 20,
    marginRight: SIZES.base
  },
  searchInput: {
    flex: 1
  }
});