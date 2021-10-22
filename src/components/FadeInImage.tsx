import React from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {useState} from 'react';

interface Props {
  uri: string;
}

export const FadeInImage = ({uri}: Props) => {
  const {opacity, fadeIn} = useAnimation();
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
          color="#5856D6"
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{width: '100%', height: 400, opacity}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {justifyContent: 'center', alignItems: 'center'},
});
