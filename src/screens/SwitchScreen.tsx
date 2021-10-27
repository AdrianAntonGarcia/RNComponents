import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
  const [state, setstate] = useState({
    isActive: false,
    isHappy: true,
    isHungry: false,
  });
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {isActive, isHappy, isHungry} = state;

  const onChange = (active: boolean, field: keyof typeof state) =>
    setstate(pvState => ({...pvState, [field]: active}));

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isActive</Text>
        <CustomSwitch
          onChange={value => onChange(value, 'isActive')}
          isOn={isActive}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHappy</Text>
        <CustomSwitch
          onChange={value => onChange(value, 'isHappy')}
          isOn={isHappy}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHungry</Text>
        <CustomSwitch
          onChange={value => onChange(value, 'isHungry')}
          isOn={isHungry}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
