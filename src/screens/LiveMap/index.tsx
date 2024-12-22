import React, {useEffect, useMemo, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {HomeRoutes, RootScreenProps} from '../../navigation/types';
import useCoordinatesSocket from '../../hooks/sockets/useCoordinatesSocket';
import {generateCoordinates} from '../../common/utils';
import {DEFAULT_MAP_DELTA} from '../../common/constants';

const LiveMap: React.FC<RootScreenProps<HomeRoutes.LiveMap>> = ({route}) => {
  const mapRef = useRef<MapView>(null);
  const {initialCoordinates} = route.params;

  const coordinates = useMemo(
    () => generateCoordinates(initialCoordinates),
    [initialCoordinates],
  );

  const {coordinate} = useCoordinatesSocket(coordinates);

  // Animate the map when coordinate changes
  useEffect(() => {
    mapRef.current?.animateToRegion({
      ...coordinate,
      latitudeDelta: DEFAULT_MAP_DELTA,
      longitudeDelta: DEFAULT_MAP_DELTA,
    });
  }, [coordinate]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        initialRegion={{
          ...initialCoordinates,
          latitudeDelta: DEFAULT_MAP_DELTA,
          longitudeDelta: DEFAULT_MAP_DELTA,
        }}
        style={styles.container}>
        <Marker coordinate={coordinate} />
      </MapView>
    </View>
  );
};

export default LiveMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
