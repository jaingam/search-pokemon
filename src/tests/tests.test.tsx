import { POKEMON } from "../app/queries/queries";
import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

const { query } = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri:'https://graphql-pokemon2.vercel.app',
      }),
    });

test('Bulbasaur', async () => {
    const { data } = await query({ query: POKEMON, variables: { name: "Bulbasaur" } })
    expect(data.pokemon.name).toBe('Bulbasaur');
    expect(data.pokemon.types[0]).toBe('Grass');
});

test('Charmander', async () => {
    const { data } = await query({ query: POKEMON, variables: { name: "Charmander" } })
    expect(data.pokemon.name).toBe('Charmander');
    expect(data.pokemon.types[0]).toBe('Fire');
});

test('Squirtle', async () => {
    const { data } = await query({ query: POKEMON, variables: { name: "Squirtle" } })
    expect(data.pokemon.name).toBe('Squirtle');
    expect(data.pokemon.types[0]).toBe('Water');
});