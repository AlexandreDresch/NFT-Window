import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nftList: {
    zIndex: 0
  },
  backgroundNftList: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  selfClose1: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  selfClose2: {
    flex: 1,
    backgroundColor: COLORS.white,
  }
});