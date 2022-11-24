import axios from 'axios'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Pokemon extends Object {
    name: string
    url: string
}

export default function Main() {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    useEffect(() => {
        axios('https://pokeapi.co/api/v2/pokedex/kanto/')
            .then(resp => resp.data)
            .then(resp => resp.pokemon_entries)
            .then(resp => resp.map((pokemon: any) => pokemon.pokemon_species))
            .then(resp => {
                setPokemonList(resp)
            })
    }, [])

    return (
        <main className="grid grid-cols-5 justify-center justify-items-center place-items-center items-center gap-10 p-12">
            {
                pokemonList.map(pokemon => {
                    return (
                        <Link href={`/pokemons/${pokemon.name}`}>
                            <div className="flex flex-col justify-between items-center p-10 rounded-lg shadow-xl bg-white">
                                <img src={`https://img.pokemondb.net/sprites/go/normal/${pokemon.name}.png`} className="w-24 h-24" />
                                <p className="text-center">
                                    { pokemon.name }
                                </p>
                            </div>
                        </Link>
                    )
                })
            }
        </main>
    )
}