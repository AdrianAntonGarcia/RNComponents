import React from 'react';
import {View, Button, Modal, StyleSheet, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appStyles} from '../theme/appTheme';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={appStyles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        {/* fondo */}
        <View style={styles.modalContainer}>
          {/* contenido */}
          <View style={styles.modalBody}>
            <Text style={styles.modalTittleText}>Modal</Text>
            <Text style={styles.modalBodyText}>Cuerpo del modal</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // height: 100,
    // width: 100,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBody: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 5,
  },
  modalTittleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalBodyText: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
  },
});
