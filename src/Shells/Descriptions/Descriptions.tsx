
import React, { FC } from 'react'
import { BoltIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Immatriculation',
        description:
            'Certificat d’immatriculation (carte grise) \n Plaques d’immatriculation',
        icon: GlobeAltIcon
    },
    {
        name: 'Contrôle technique',
        description:
            'Présentation de vos véhicules au centre de contrôle technique (SNCT)',
        icon: ScaleIcon
    },
    {
        name: 'Certificat de Conformite Europeene',
        description:
            'Des Certificats de conformité pour plusieurs marques de véhicules particuliers et utilitaires',
        icon: BoltIcon
    }
]

const Descriptions: FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-xl font-semibold text-indigo-600 py-10">Services</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Une meilleur façon pour gérer vos paperasses
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto py-10">
                        Société spécialisée dans l’immatriculation et le passage au contrôle technique de vos véhicules au Grand-Duché de Luxembourg.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative border rounded-md p-5">
                                <dt>
                                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Descriptions
