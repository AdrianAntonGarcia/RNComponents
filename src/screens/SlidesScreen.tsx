import React, {useContext} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../context/themeContext/ThemeContext';
const {height: screenHeight, width: screenWdith} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> {}
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn, fadeOut} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const isVisibleRef = useRef(false);
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={{...styles.title, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.subtitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={items}
        // removeClippedSubviews={true}
        renderItem={({item}: {item: Slide}) => renderItem(item)}
        sliderWidth={screenWdith}
        itemWidth={screenHeight}
        layout="stack"
        onSnapToItem={index => {
          console.log(index);
          setActiveIndex(index);
          if (items.length - 1 === index) {
            isVisibleRef.current = true;
            fadeIn();
          } else {
            isVisibleRef.current = false;
            fadeOut();
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />

        <Animated.View style={{opacity: opacity}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: colors.primary,
              width: 150,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              if (isVisibleRef.current) {
                navigation.navigate('HomeScreen');
              }
            }}
            activeOpacity={0.8}>
            <Text style={{fontSize: 25, color: 'white'}}>Entrar</Text>
            <Icon name="chevron-forward-outline" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 30, fontWeight: 'bold', color: '#5856D6', width: 350},
  subtitle: {fontSize: 16, width: 350},
});
