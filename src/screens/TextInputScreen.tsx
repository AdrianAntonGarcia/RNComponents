import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appStyles} from '../theme/appTheme';

export const TextInputScreen = () => {
  return (
    <View style={appStyles.globalMargin}>
      <HeaderTitle title="TextInputs" />
      <TextInput style={styles.inputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderWidth: 2,
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.4)',
  },
});
