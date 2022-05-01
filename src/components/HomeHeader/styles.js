import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

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
  }
});