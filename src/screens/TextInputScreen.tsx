import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appStyles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({name: '', email: '', phone: ''});

  const onChange = (value: string, field: string) => {
    setForm({...form, [field]: value});
  };
  return (
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
      <HeaderTitle title={JSON.stringify(form, null, 2)} />
    </View>
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
});
