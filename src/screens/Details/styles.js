import { StyleSheet } from 'react-native';
import { SIZES } from '../../../constants';

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
  }
});