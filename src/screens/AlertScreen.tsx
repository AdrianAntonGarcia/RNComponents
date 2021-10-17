import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appStyles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Título',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true, onDismiss: () => console.log('On dismiss')},
    );
  };
  /**
   * Solo funciona en IOS
   */
  const showPrompt = () => {
    Alert.prompt(
      '¿Está seguro?',
      'Esta acción no se puede revertir',
      (valor: string) => console.log('info', valor),
      'plain-text',
      '',
      '',
    );
  };
  return (
    <View style={appStyles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

const styles = StyleSheet.create({});
