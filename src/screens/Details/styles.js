import { StyleSheet } from 'react-native';
import { SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsHeaderContainer: {
    width: '100%',
    height: 373
  },
  detailsHeaderImage: {
    width: '100%',
    height: '100%'
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
  }
});