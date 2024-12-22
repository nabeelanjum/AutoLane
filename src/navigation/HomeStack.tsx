import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRoutes} from './types';
import {Home, LiveMap} from '../screens';

const StackNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name={HomeRoutes.Home} component={Home} />
      <StackNavigator.Screen name={HomeRoutes.LiveMap} component={LiveMap} />
    </StackNavigator.Navigator>
  );
};

export default HomeStack;
