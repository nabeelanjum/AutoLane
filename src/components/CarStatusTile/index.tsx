import React, {useMemo} from 'react';
import {View} from 'react-native';
import {CarStatusItem} from '../../hooks/queries/types';
import {statusStringMap} from './types';
import AppText from '../shared/AppText';
import AppButton from '../shared/AppButton';
import colors from '../../common/colors';
import useStyles from './styles';

interface Props {
  item: CarStatusItem;
}

const CarStatusTile: React.FC<Props> = ({item}) => {
  const isCarMoving = useMemo(
    () => item.status === 1 || item.status === 3,
    [item.status],
  );

  const buttonLabel = useMemo(() => {
    return isCarMoving ? 'See on map' : 'Send car';
  }, [isCarMoving]);

  const styles = useStyles(isCarMoving);

  return (
    <View style={styles.container}>
      <View style={styles.carDetails}>
        <AppText size={18} bold>
          {statusStringMap[item.status]}
        </AppText>
        <AppText color={colors.fontSecondary}>{item.carNumber}</AppText>
      </View>
      <AppButton style={styles.mapButton} label={buttonLabel} />
    </View>
  );
};

export default CarStatusTile;
