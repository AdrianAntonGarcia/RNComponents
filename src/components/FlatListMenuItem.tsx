import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  menuItem: MenuItem;
}
export const FlatListMenuItem = ({menuItem: {name, icon}}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Icon name={icon} color="grey" size={25} />
        <Text style={styles.itemText}>
          {name} - {icon}
        </Text>
        <Icon
          style={styles.iconPos}
          name="chevron-forward-outline"
          color="grey"
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
