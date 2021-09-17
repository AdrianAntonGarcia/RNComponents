import React from 'react';
import {Text, View} from 'react-native';
import {appStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
  color?: string;
}
export const HeaderTitle = ({title, color = '#5856D6'}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={{...appStyles.title, color}}>{title}</Text>
    </View>
  );
};
