import {useEffect, useRef, useState} from 'react';
import {Coordinate} from '../../common/types';
import {useIsFocused} from '@react-navigation/native';

const SOCKET_URL = 'wss://api.tiingo.com/crypto';

const subscribe = {
  eventName: 'subscribe',
  eventData: {
    // Yes token shouldn't be kept here ofc but due to time constraints leaving as is
    authToken: 'b9794a8a0844ff380d0497f55568454926439fd4',
    thresholdLevel: 5,
    tickers: ['btcusdt'],
  },
};

// I wasn't able to find a free socket that gives us coordinates, so I am using this BTC socket.
// Whenever it gives signal, I jump to the next coordinate from the coordinates array.
// Coordinates array is being generates using the starting coordinates coming from mockapi endpoint.
const useCoordinatesSocket = (coordinates: Coordinate[]) => {
  const [coordinate, setCoordinate] = useState<Coordinate>(coordinates[0]);
  const index = useRef<number>(0);

  const isFocused = useIsFocused();

  // Open and close WebSocket based on focus state for better efficiency
  useEffect(() => {
    if (isFocused) {
      const socket = new WebSocket(SOCKET_URL);

      socket.onopen = () => socket.send(JSON.stringify(subscribe));

      socket.onerror = e => {
        console.error(e.message);
      };

      socket.onmessage = () => {
        const element = coordinates[index.current];
        index.current = (index.current + 1) % coordinates.length; // Move to the next index, reset to 0 if at the end
        setCoordinate(element);
      };

      return () => {
        socket.close();
      };
    }
  }, [coordinates, isFocused]);

  return {
    coordinate,
  };
};

export default useCoordinatesSocket;
