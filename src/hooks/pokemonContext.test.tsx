import React from 'react';
import { PokemonContextProvider, usePokemonContext } from './pokemonContext';
import { renderHook, act } from '@testing-library/react-hooks';

const Providers: React.FC = ({ children }) => (
  <PokemonContextProvider>
    {children}
  </PokemonContextProvider>
);


describe('Pokedex context', () => {
  it('should fetch 10 pokemons', async () => {
    const { result } = renderHook(() => usePokemonContext(), { wrapper: Providers });

    await act(() => result.current.fetchPokemons());

    expect(result.current.pokemons.length).toBe(10);
  });

  it('should fetch 20 pokemons', async () => {
    const { result } = renderHook(() => usePokemonContext(), { wrapper: Providers });

    await act(() => result.current.fetchPokemons());

    await act(() => result.current.fetchPokemons());

    expect(result.current.pokemons.length).toBe(20);
  });
});
