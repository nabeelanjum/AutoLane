import {StyleSheet} from 'react-native';
import colors from '../../common/colors';
import {statusColorMap} from './types';

const useStyles = (isCarMoving: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 80,
      borderRadius: 10,
      marginVertical: 10,
      padding: 10,
      shadowOpacity: 0.1,
      shadowOffset: {width: 0, height: 0},
      backgroundColor: 'white',
    },
    carDetails: {
      flex: 1,
    },
    mapButton: {
      width: 110,
      backgroundColor: isCarMoving ? colors.button : statusColorMap[3],
    },
  });

export default useStyles;
