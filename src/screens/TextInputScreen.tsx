import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Text,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appStyles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';

export const TextInputScreen = () => {
  const {formulario: form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={appStyles.globalMargin}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={styles.inputStyle}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              textContentType="emailAddress"
              keyboardAppearance="dark"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Ingrese su teléfono"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={styles.switchRow}>
              <Text style={styles.switchText}>Subscribirse:</Text>
              <CustomSwitch
                onChange={value => onChange(value, 'isSubscribed')}
                isOn={form.isSubscribed}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 2)} />
            <HeaderTitle title={JSON.stringify(form, null, 2)} />
            <HeaderTitle title={JSON.stringify(form, null, 2)} />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderWidth: 2,
    marginVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.4)',
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
