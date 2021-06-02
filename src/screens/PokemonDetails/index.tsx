import React, { useEffect, useMemo, useCallback, useState, useRef } from 'react';

import {
  Animated,
  Easing,
} from 'react-native';

import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import useSWR from 'swr';

import { SafeAreaWrapper } from '~/components';
import {
  getPokemonImageById,
  addPadLeftToNumber,
} from '~/utils';

import {
  HeaderItemsWrapper,
  StatFieldWrapper,
  PokemonNumberId,
  StatGraficValue,
  AbilityWrapper,
  PokemonImage,
  StatWrapper,
  PokemonName,
  AbilityText,
  StatGrafic,
  StatValue,
  Container,
  Abilities,
  StatName,
  DragIcon,
  Lottie,
  styles,
  Header,
  Modal,
} from './styles';

interface PokemonProps {
  id: number;
  name: string;
  abilities: {
    ability: {
      name: string,
    },
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    }
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    }
  }[];
  weight: number;
  height: number;
}

const MINIMUM_MODAL_TRANSLATION = 50;

function PokemonDetails() {
  const id = useRoute<any>()?.params?.id;
  const [isModalFullyOpened, setIsModalFullyOpened] = useState<boolean>(false);
  const { data: pokemon } = useSWR<PokemonProps>(`/pokemon/${id}`);
  let animatedIconTranslateX = useRef(new Animated.Value(1)).current;
  let animatedOpacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const animatedEvent = Animated.event([{
    nativeEvent: {
      translationY: translateY
    }
  }], {
    useNativeDriver: true
  });
  let animatedOffset = 0;

  const randomTrueOrFalse = useMemo(() => Boolean(Math.round(Math.random())), []);

  useEffect(() => {
    Animated.timing(animatedIconTranslateX, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [animatedIconTranslateX, animatedOpacity]);

  const onHandlerStateChange = useCallback(({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      const { translationY } = nativeEvent;
      let opened = false;
      animatedOffset += translationY;

      if (translationY > 0 && !isModalFullyOpened) return;

      if (translationY < 0 && isModalFullyOpened) return;


      if (translationY >= MINIMUM_MODAL_TRANSLATION) {
        setIsModalFullyOpened(false);
        opened = true;
      } else {
        setIsModalFullyOpened(true);
        translateY.setValue(animatedOffset);
        translateY.setOffset(0);
        animatedOffset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 60 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        animatedOffset = opened ? 60 : 0;
        translateY.setOffset(animatedOffset);
        translateY.setValue(0);
      });
    }
  }, [translateY, isModalFullyOpened]);

  return (
    <SafeAreaWrapper>
      <Container>
        {!!pokemon && (
          <>
            <Header>
              <HeaderItemsWrapper>
                <PokemonName
                  style={[
                    styles.textShadow,
                    {
                      transform: [
                        {
                          translateY: animatedIconTranslateX.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 20],
                            extrapolate: 'clamp',
                          }),
                        },
                      ],
                      opacity: animatedOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1],
                        extrapolate: 'clamp',
                      }),

                    }]}
                >
                  {pokemon?.name}
                </PokemonName>
                <PokemonNumberId
                  style={styles.textShadow}
                >
                  {`#${addPadLeftToNumber(pokemon?.id, 4)}`}
                </PokemonNumberId>
              </HeaderItemsWrapper>
              <HeaderItemsWrapper>
                <Abilities>
                  {pokemon?.types.map(({ type }, id: number) => (
                    <AbilityWrapper key={`${id}-${type.name}`}>
                      <AbilityText>{type.name}</AbilityText>
                    </AbilityWrapper>
                  ))}
                </Abilities>
                <Lottie
                  source={require('~/assets/LottieJsonFiles/pokeball.json')}
                />
              </HeaderItemsWrapper>
            </Header>
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: animatedIconTranslateX.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, randomTrueOrFalse ? 100 : -100],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
                opacity: animatedOpacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
              }}
            >
              <PokemonImage source={{ uri: getPokemonImageById(id) }} />
            </Animated.View>
            <PanGestureHandler
              onGestureEvent={animatedEvent}
              onHandlerStateChange={onHandlerStateChange}
            >
              <Modal
                style={{
                  transform: [
                    {
                      translateY: translateY.interpolate({
                        inputRange: [-100, 0, 100],
                        outputRange: [!isModalFullyOpened ? -100 : 0, 0, isModalFullyOpened ? 100 : 0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ]
                }}
                isFullyOpened={isModalFullyOpened}
              >
                <DragIcon />
                {pokemon?.stats.map((_stat, index: number) => (
                  <StatWrapper key={`${index}-${_stat.base_stat}`}>
                    <StatFieldWrapper flex={0.5}>
                      <StatName>{_stat?.stat?.name.replace('special-', 'sp. ')}</StatName>
                    </StatFieldWrapper>
                    <StatFieldWrapper flex={0.5}>
                      <StatValue>{_stat?.base_stat}</StatValue>
                    </StatFieldWrapper>
                    <StatFieldWrapper flex={1}>
                      <StatGrafic>
                        <StatGraficValue value={_stat?.base_stat} />
                      </StatGrafic>
                    </StatFieldWrapper>
                  </StatWrapper>
                ))}
                <StatWrapper>
                  <StatFieldWrapper flex={0.5}>
                    <StatName>total</StatName>
                  </StatFieldWrapper>
                  <StatFieldWrapper flex={0.5}>
                    <StatValue>
                      {pokemon?.stats.reduce((_total, currentValue) => _total + currentValue.base_stat, 0)}
                    </StatValue>
                  </StatFieldWrapper>
                  <StatFieldWrapper flex={1}>
                    <StatGrafic>
                      <StatGraficValue value={80} />
                    </StatGrafic>
                  </StatFieldWrapper>
                </StatWrapper>
              </Modal>
            </PanGestureHandler>
          </>
        )}
      </Container>
    </SafeAreaWrapper >
  );
};

export default PokemonDetails;
