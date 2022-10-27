import React, { FC } from 'react'
import { CocImg, CTImg, ImmatImg } from '../../assets'

const products = [
    {
        id: 1,
        name: 'Immatriculation',
        href: '#',
        oldPrice: '100€',
        price: '80€',
        imageSrc: ImmatImg,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
    },
    {
        id: 2,
        name: 'Controle Technique',
        href: '#',
        oldPrice: '90€',
        price: '70€',
        imageSrc: CTImg,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
    },
    {
        id: 3,
        name: 'Certificat de conformité (COC)',
        href: '#',
        oldPrice: '',
        price: 'Sur commande',
        imageSrc: CocImg,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
    }
    // More products...
]

const Products: FC = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            <p className="mt-1 text-md font-medium text-red-900 line-through">{product.oldPrice}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
