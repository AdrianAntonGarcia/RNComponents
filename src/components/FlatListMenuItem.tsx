import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}
export const FlatListMenuItem = ({
  menuItem: {name, icon, component},
}: Props) => {
  const navigation = useNavigation<any>();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(component)}>
      <View style={styles.container}>
        <Icon name={icon} color={colors.primary} size={25} />
        <Text style={styles.itemText}>{name}</Text>
        <Icon
          style={styles.iconPos}
          name="chevron-forward-outline"
          color={colors.primary}
          size={25}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  itemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  iconPos: {
    alignContent: 'flex-end',
  },
});
