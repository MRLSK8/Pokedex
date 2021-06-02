import React, { useCallback, useEffect } from 'react';

import { usePokemonContext } from '~/hooks/pokemonContext';

import {
  SafeAreaWrapper,
  LoadingWrapper,
  PokemonItem,
} from '~/components';

import {
  GradientBackGround,
  LoadingIconField,
  GradientShadow,
  LoadingIcon,
  PokemonList,
  Container,
} from './styles';

const PokemonsList = () => {
  const { fetchPokemons, pokemons, isLoadingMorePokemons } = usePokemonContext();

  const renderItem = ({ item: { name, id, image } }: any) => (
    <PokemonItem name={name} id={id} image={image} />
  );

  const renderListFooter = useCallback(() => {
    if (!isLoadingMorePokemons) return null;

    return (
      <LoadingIconField>
        <LoadingIcon />
      </LoadingIconField>
    );
  }, [isLoadingMorePokemons]);

  useEffect(() => {
    setTimeout(() => {
      fetchPokemons();
    }, 2000);
  }, []);

  return (
    <SafeAreaWrapper>
      <Container>
        <LoadingWrapper isLoading={pokemons.length === 0}>
          <>
            <GradientShadow />
            <GradientBackGround>
              <PokemonList
                data={pokemons}
                renderItem={renderItem}
                keyExtractor={(item: any) => item?.name}
                onEndReached={fetchPokemons}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderListFooter}
              />
            </GradientBackGround>
          </>
        </LoadingWrapper>
      </Container>
    </SafeAreaWrapper>
  );
};

export default PokemonsList;
