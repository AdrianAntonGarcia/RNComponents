import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  name: string;
  icon: string;
  component: string;
}
const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>{menuItem.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'green'},
});
