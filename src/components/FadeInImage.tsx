import React, {useContext} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = () => {
    setIsLoading(false);
    fadeIn(1500);
  };
  return (
    <View style={styles.view}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          size={35}
          color={colors.primary}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{...(style as any), opacity}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {justifyContent: 'center', alignItems: 'center'},
});
