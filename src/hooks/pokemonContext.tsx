import React, {
  createContext,
  useCallback,
  useContext,
  ReactNode,
  useState,
} from 'react';

import {
  getPokemonImageById,
  getPokemonIdByUrl,
} from '~/utils';

import Api from '~/services/api';

const PokemonContext = createContext({} as PokemonContextProps);

interface PokemonContextProps {
  isLoadingMorePokemons: boolean;
  fetchPokemons(): Promise<void>;
  pokemons: PokemonListProps[];
}

interface ApiCallProps {
  name: string;
  url: string;
}

export interface PokemonListProps extends ApiCallProps {
  image: string;
  id: number;
}

interface PokemonContextProviderProps {
  children: ReactNode;
}

const LIMIT_OF_POKEMONS_AT_A_TIME = 10;

const PokemonContextProvider = ({ children }: PokemonContextProviderProps) => {
  const [isLoadingMorePokemons, setIsLoadingMorePokemons] = useState(false);
  const [pokemons, setPokemons] = useState<PokemonListProps[]>([]);
  const [currentOffset, setCurrentOffset] = useState(0);

  const formatPokemonData = useCallback((data: ApiCallProps[]) => {
    return Array.from(data || [], (item: ApiCallProps) => {
      const pokemonId = getPokemonIdByUrl(item?.url);
      const pokemonImage = getPokemonImageById(pokemonId);

      return {
        ...item,
        id: pokemonId,
        image: pokemonImage,
      }
    });
  }, []);

  const fetchPokemons = useCallback(async () => {
    if (isLoadingMorePokemons) return;

    try {
      setIsLoadingMorePokemons(true);
      const response = await Api.get(`/pokemon?offset=${currentOffset}&limit=${LIMIT_OF_POKEMONS_AT_A_TIME}`);

      const pokemonsDataFormatted = formatPokemonData(response?.data?.results);

      setPokemons(prevState => [...prevState, ...pokemonsDataFormatted]);
      setCurrentOffset(prevState => prevState + LIMIT_OF_POKEMONS_AT_A_TIME);
    } catch (error) {
      throw new (error);
    } finally {
      setIsLoadingMorePokemons(false);
    }
  }, [LIMIT_OF_POKEMONS_AT_A_TIME, currentOffset, isLoadingMorePokemons]);

  return (
    <PokemonContext.Provider value={{ fetchPokemons, pokemons, isLoadingMorePokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemonContext = (): any => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error('usePokemonContext must be used within an PokemonContextProvider');
  }

  return context;
};

export { usePokemonContext, PokemonContextProvider };
