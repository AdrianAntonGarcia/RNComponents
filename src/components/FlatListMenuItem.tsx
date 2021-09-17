import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}
export const FlatListMenuItem = ({
  menuItem: {name, icon, component},
}: Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(component)}>
      <View style={styles.container}>
        <Icon name={icon} color="#5856D6" size={25} />
        <Text style={styles.itemText}>
          {name} - {icon}
        </Text>
        <Icon
          style={styles.iconPos}
          name="chevron-forward-outline"
          color="#5856D6"
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
