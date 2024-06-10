'use client'

import ProgressBar from '@ramonak/react-progress-bar'
import { Pokemon } from 'pokenode-ts'

interface PokemonStatsProps {
    pokemon: Pokemon
}

export default function PokemonStats(props: PokemonStatsProps) {
    return (
        <div className='flex justify-center items-center flex-col mt-20'>
{
            props.pokemon.stats.map(stat => {
                return(
                    <div key={stat.stat.name} className="flex items-center justify-between w-80">
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
    )
}