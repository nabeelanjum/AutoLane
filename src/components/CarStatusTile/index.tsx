import React, {useCallback, useMemo} from 'react';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CarStatusItem} from '../../hooks/queries/types';
import {statusStringMap} from './types';
import AppText from '../shared/AppText';
import AppButton from '../shared/AppButton';
import colors from '../../common/colors';
import useStyles from './styles';
import {HomeRoutes} from '../../navigation/routes';

interface Props {
  item: CarStatusItem;
}

const CarStatusTile: React.FC<Props> = ({item}) => {
  const navigation = useNavigation();

  const isCarMoving = useMemo(
    () => item.status === 1 || item.status === 3,
    [item.status],
  );

  const buttonLabel = useMemo(() => {
    return isCarMoving ? 'See on map' : 'Send car';
  }, [isCarMoving]);

  const handleOnPress = useCallback(() => {
    if (isCarMoving) {
      navigation.navigate(HomeRoutes.LiveMap);
    } else {
      Alert.alert('Under Construction');
    }
  }, [isCarMoving, navigation]);

  const styles = useStyles(isCarMoving);

  return (
    <View style={styles.container}>
      <View style={styles.carDetails}>
        <AppText size={18} bold>
          {statusStringMap[item.status]}
        </AppText>
        <AppText color={colors.fontSecondary}>{item.carNumber}</AppText>
      </View>
      <AppButton
        onPress={handleOnPress}
        style={styles.mapButton}
        label={buttonLabel}
      />
    </View>
  );
};

export default CarStatusTile;
