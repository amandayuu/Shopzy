import {AppColors} from '@app/utils';
import {ArrowIcon} from '@assets/svg';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText from './AppText';
import Spacer from './Spacer';

type DropdownSelectorProps = {
  title: string;
  onPress: ((event: GestureResponderEvent | string) => void) | undefined;
  selectedValue: string;
};

export default ({onPress, selectedValue, title}: DropdownSelectorProps) => {
  return (
    <View>
      <AppText
        fontFamily="ManropeBold"
        color="LightWhite"
        style={{opacity: 0.5}}>
        {(title && title.toUpperCase()) || ''}
      </AppText>
      <TouchableOpacity
        onPress={() => onPress && onPress(selectedValue)}
        style={{paddingVertical: 5}}>
        <View style={styles.dropdownButton}>
          <AppText color="LightWhite">{selectedValue || ''}</AppText>
          <Spacer space={5} between />
          <ArrowIcon
            fill={AppColors.Grey}
            style={{transform: [{rotate: '270deg'}]}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
