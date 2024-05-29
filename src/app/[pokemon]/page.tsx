'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import ProgressBar from '@ramonak/react-progress-bar'

import { pokemonBase } from '@/utils/base'
import BasicInformationLayout from '@/components/BasicInformationLayout'

export default function pokemonPage(
    { params } :{
        params: {
            pokemon: string
        }
    }
) {
    const pokemonName = params.pokemon
    const [pokemon, setPokemon] = useState<Pokemon>(pokemonBase)

    useEffect(() => {
        axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(resp => resp.data)
            .then(resp => {
                setPokemon(resp)
            })
    }, [])

    return (
        <>
            <h1 className="text-center font-bold text-4xl">
                { `${pokemon.name.toUpperCase()}`} <strong className="text-red-500">|</strong> <span className="font-normal text-slate-500 italic">{ `Nº${pokemon.id}` }</span>
            </h1>

            <div className="flex justify-center items-center gap-8 mt-20">
                <div className="border-black border-solid border-2 w-64 h-64">
                    <img className="border-black border-solid border-2" src={`https://img.pokemondb.net/sprites/go/normal/${pokemon.name}.png`} />
                </div>

                <div className="grid grid-cols-2 bg-green-600 p-5 rounded-lg w-64 h-64 place-items-center text-center">
                    <BasicInformationLayout title="Height">
                        <p className="italic">{ pokemon.height / 10 }m</p>
                    </BasicInformationLayout>

                    <BasicInformationLayout title="Weight">
                        <p className="italic">{ pokemon.weight / 10 }Kg</p>
                    </BasicInformationLayout>

                    <BasicInformationLayout title="Abilities">
                        { pokemon.abilities.map(ability => <p className="italic">{ability.ability.name}</p>) }
                    </BasicInformationLayout>

                    <BasicInformationLayout title="Type">
                        { pokemon.types.map(type => <p className={`italic bg-${type.type.name} px-2 rounded-sm`}>{type.type.name}</p>) }
                    </BasicInformationLayout>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col mt-20'>
                {
                    pokemon.stats.map(stat => {
                        return(
                            <div className="flex items-center justify-between w-80">
                                <span>{ stat.stat.name }</span>
                                <ProgressBar
                                    completed={`${stat.base_stat}`}
                                    width="200px"
                                    maxCompleted={150}
                                    labelAlignment='center'
                                />
                            </div>
                        )
                    })
                }
            </div>

            <div>

            </div>
        </>
    )
}

/* 
     bg-normal bg-fire bg-poison bg-grass bg-dragon bg-flying bg-ground bg-dark bg-fairy bg-water bg-rock bg-eletric bg-psychic bg-ice bg-ghost bg-steel bg-bug bg-fighting
*/