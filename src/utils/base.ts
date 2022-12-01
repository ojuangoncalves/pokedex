const pokemonBaseSprites: PokemonSprites = {
    front_default: '',
    front_shiny: '',
    front_female: '',
    front_shiny_female: '',
    back_default: '',
    back_shiny: '',
    back_female: '',
    back_shiny_female: ''
}

export const pokemonBase: Pokemon = {
    id: 0,
    name: '',
    base_experience: 0,
    height: 0,
    is_default: false,
    order: 0,
    weight: 0,
    abilities: [],
    forms: { name: '', url: '' },
    game_indices: null,
    held_items: [],
    location_area_encounters: '',
    moves: [],
    past_types: [],
    sprites: pokemonBaseSprites,
    species: { name: '', url: '' },
    stats: [],
    types: []
}