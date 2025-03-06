//   const POKEMONS = (first:number) => gql`
//   query {
//   pokemons(first: ${first}){
//     id
//     number
//     name
//     weight{
//       minimum
//       maximum
//     }
//     height{
//       minimum
//       maximum
//     }
//     classification
//     types
//     resistant
//     weaknesses
//     fleeRate
//     maxCP
//     maxHP
//     image
//   }
// }`;

import gql from 'graphql-tag';

export const POKEMON = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            number
            name
            weight {
                minimum
                maximum
            }
            height {
                minimum
                maximum
            }
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            image
        }
    }
`;

