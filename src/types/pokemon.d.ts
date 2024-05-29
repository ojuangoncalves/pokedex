
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

// Types for Evolution Chain
interface EvolutionChain {
    id: number
    bay_trigger_item: Item
    chain: ChainLink
    is_baby: boolean
    species: EvolutionSpecies
    evolution_details: EvolutionDetails[]
    evolves_to: ChainLink[]
}

interface Item {
    id: number
    name: string
    cost: number
    fling_power: number
    fling_effect: ItemFlingEffect
    attributes: ItemAttribute[]
    category: ItemCategory
    effect_entries: VerboseEffect[]
    flavor_text_entries: VersionGroupFlavorText[]
    game_indices: GenerationGameIndex[]
    names: Name[]
    sprites: ItemSprites
    held_by_pokemon: ItemHolderPokemon[]
    baby_trigger_for: EvolutionChain
    machines: MachineVersionDetail[]
}

interface ItemSprites {
    default: string
}

interface ItemHolderPokemon {
    pokemon: Pokemon
    version_details: ItemHolderPokemonVersionDetail[]
}

interface ItemHolderPokemonVersionDetail {
    rarity: number
    version: Version
}

interface ItemFlingEffect {
    id: number
    name: string
    effect_entries: Effect[]
    items: Item
}

interface ItemAttribute {
    id: number
    name: string
    items: Item[]
    names: Name[]
    descriptions: Description[]
}

interface ItemCategory {
    id: number
    name: string
    items: Item[]
    names: Name[]
    pocket: ItemPocket
}

interface ItemPocket {
    id: number
    name: string
    categories: ItemCategory[]
    names: Name[]
}

interface VerboseEffect {
    effect: string
    short_effect: string
    language: Language
}

interface Description {
    description: string
    language: Language
}

interface Effect {
    effect: string
    language: Language
}

interface MachineVersionDetail {
    machine: Machine
    version_group: VersionGroup
}

interface Name {
    name: string
    language: Language
}

interface VersionGroupFlavorText {
    text: string
    language: Language
    version_group: VersionGroup
}

interface Language {
    id: number
    name: string
    official: boolean
    iso639: string
    iso3166: string
    names: Name[]
}

interface GenerationGameIndex {
    game_index: number
    generation: Generation
}

interface Version {
    id: number
    name: string
    names: Name[]
    version_group: VersionGroup
}

interface VersionGroup {
    id: number
    name: string
    order: number
    generation: Generation
    move_learn_methodes: MoveLearnMethod[]
}