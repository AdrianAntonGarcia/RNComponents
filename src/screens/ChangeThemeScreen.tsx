import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {appStyles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';

export const ChangeThemeScreen = () => {
  return (
    <View style={appStyles.globalMargin}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: '#5856D6',
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
