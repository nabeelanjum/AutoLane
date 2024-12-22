import {StackScreenProps} from '@react-navigation/stack';
import {Coordinate} from '../common/types';

export enum HomeRoutes {
  Home = 'Home',
  LiveMap = 'LiveMap',
}

export type RootStackParamList = {
  [HomeRoutes.LiveMap]: {initialCoordinates: Coordinate};
};

export type RootScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
