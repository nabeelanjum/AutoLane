import React, {useMemo} from 'react';
import {CarStatusItem} from '../../hooks/queries/types';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {statusStringMap} from './types';

interface Props {
  item: CarStatusItem;
}

const CarStatusTile: React.FC<Props> = ({item}) => {
  const isCarMoving = useMemo(
    () => item.status === 1 || item.status === 3,
    [item.status],
  );

  return (
    <View style={styles.container}>
      <View style={styles.carDetails}>
        <Text>{item.carNumber}</Text>
        <Text>{statusStringMap[item.status]}</Text>
      </View>
      {isCarMoving && <TouchableOpacity>See on map</TouchableOpacity>}
    </View>
  );
};

export default CarStatusTile;
