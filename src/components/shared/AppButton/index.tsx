import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  ColorValue,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../../../common/colors';
import AppText from '../AppText';

interface Props extends TouchableOpacityProps {
  label: string;
  loadingColor?: ColorValue;
  titleStyle?: TextStyle;
  isLoading?: boolean;
  disabled?: boolean;
}

const AppButton: React.FC<Props> = props => {
  const {
    label,
    style,
    loadingColor,
    titleStyle,
    isLoading,
    disabled = false,
    activeOpacity,
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.5}
      disabled={disabled || isLoading}
      onPress={props.onPress}
      style={StyleSheet.flatten([
        styles.button,
        style,
        disabled && styles.disabledButton,
      ])}>
      {isLoading ? (
        <ActivityIndicator size="small" color={loadingColor || colors.white} />
      ) : (
        <AppText
          semiBold
          style={StyleSheet.flatten([styles.titleStyle, titleStyle])}>
          {label}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.button,
  },
  disabledButton: {
    backgroundColor: colors.lightGrey,
  },
  titleStyle: {
    color: colors.white,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default AppButton;
