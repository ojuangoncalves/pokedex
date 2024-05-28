interface Pokemon {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: PokemonAbility[]
    forms: PokemonBaseInfo
    game_indices: any //REVER
    held_items: PokemonHeldItem[]
    location_area_encounters: string
    moves: PokemonMove[]
    past_types: PokemonTypePast[]
    sprites: PokemonSprites
    species: PokemonBaseInfo
    stats: PokemonStat[]
    types: PokemonType[]
}

interface PokemonBaseInfo {
    name: string
    url: string
}

interface PokemonAbility {
    is_hidden: boolean
    slot: number
    ability: PokemonBaseInfo
}

interface PokemonType {
    slot: number
    type: PokemonBaseInfo
}

interface PokemonTypePast {
    generation: PokemonBaseInfo
    types: PokemonType
}

interface PokemonHeldItem {
    item: PokemonBaseInfo
    version_details: PokemonHeldItemVersion
}

interface PokemonHeldItemVersion {
    version: PokemonBaseInfo
    rarity: number
}

interface PokemonMove {
    move: PokemonBaseInfo
    version_group_details: PokemonMoveVersion
}

interface PokemonMoveVersion {
    move_learn_method: PokemonBaseInfo
    version_group: PokemonBaseInfo
    level_learned_at: number
}

interface PokemonStat {
    stat: PokemonBaseInfo
    effort: number
    base_stat: number
}

interface PokemonSprites {
    front_default: string
    front_shiny: string
    front_female: string
    front_shiny_female: string
    back_default: string
    back_shiny: string
    back_female: string
    back_shiny_female: string
}

