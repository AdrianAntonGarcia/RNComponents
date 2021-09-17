import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {appStyles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';

export const HomeScreen = () => {
  const itemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 5}} />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, ...appStyles.globalMargin},
});
