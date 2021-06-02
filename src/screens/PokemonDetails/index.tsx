import React, { useEffect } from 'react';

import { useRoute } from '@react-navigation/native';
import useSWR from 'swr';

import { SafeAreaWrapper } from '~/components';
import {
  getPokemonImageById,
  addPadLeftToNumber,
} from '~/utils';

import {
  NameAndNumberIdWrapper,
  PokemonNumberId,
  PokemonImage,
  PokemonName,
  Container,
  styles,
  Header,
} from './styles';

interface PokemonProps {
  id: number;
  name: string;
  abilities: {
    ability: {
      name: string,
    },
  }[];
  species: {
    name: string;
  },
  types: {
    slot: number;
    type: {
      name: string;
    }
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    }
  }[];
  weight: number;
}

function PokemonDetails() {
  const id = useRoute<any>()?.params?.id;
  const { data: pokemon } = useSWR<PokemonProps>(`/pokemon/${id}`);

  useEffect(() => {
    // console.log(pokemon?.abilities.map(({ ability }) => ability.name));
    // console.log(pokemon?.species);
  }, [pokemon]);

  return (
    <SafeAreaWrapper>
      <Container>
        {pokemon && (
          <Header>
            <NameAndNumberIdWrapper>
              <PokemonName
                style={styles.textShadow}
              >
                {pokemon?.name}
              </PokemonName>
              <PokemonNumberId
                style={styles.textShadow}
              >
                {`#${addPadLeftToNumber(pokemon?.id, 4)}`}
              </PokemonNumberId>
            </NameAndNumberIdWrapper>
          </Header>
        )}
        <PokemonImage source={{ uri: getPokemonImageById(id) }} />
      </Container>
    </SafeAreaWrapper>
  );
};

export default PokemonDetails;
