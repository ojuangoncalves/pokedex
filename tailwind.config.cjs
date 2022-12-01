/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        pokemon: ["Pokemon", "cursive"]
      },
      colors: {
        normal: '#a4acaf',
        fire: '#fd7d24',
        water: '#4592c4',
        grass: '#9bcc50',
        poison: '#b97fc9',
        eletric: '#eed535',
        rock: '#a38c21',
        psychic: '#f366b9',
        ice: '#51c4e7',
        bug: '#729f3f',
        ghost: '#7b62a3',
        steel: '#9eb7b8',
        dark: '#707070',
        fairy: '#fdb9e9'
      },
      backgroundImage: {
        flying: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
        ground: 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)',
        dragon: 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)'
      }
    },
  },
  plugins: [],
}

/* 
   Normal, Fire, Water, Grass, Flying, Fighting, Poison, Electric, Ground, Rock, Psychic, Ice, Bug, Ghost, Steel, Dragon, Dark and Fairy.
*/
