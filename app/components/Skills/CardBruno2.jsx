import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import ItemsCB2 from './ItemsCB2';
import Image from 'next/image';

const CardBruno2 = (props) => {

    const descripciones1 = [
        { id: 1, descripcion: props.descripcion},
        { id: 2, descripcion: props.descripcion2}, 
        { id: 3, descripcion: props.descripcion3},
    ]
    
    return (

        <div className="p-3 md:w-auto text-center flex flex-col items-center justify-center bg-opacity-100 m-4 rounded-md  ">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition-transform">
                <div className='flex justify-center'>
                    <Image
                        width={70}
                        height={70}
                        src={props.imagen}
                    />
                </div>
                <h5 className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-400 min-h-16">{props.nombre}</h5>

                <ul role="list" className="space-y-5 my-7 text-center">

                    {descripciones1.map((objetoDescripcion) => (
                        <ItemsCB2 key={objetoDescripcion} descripcion={objetoDescripcion.descripcion} />
                    ))}

                </ul>
                <button type="button" className="transform transition-transform text-white bg-black hover:bg-green-300 hover:scale-95 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center items-center">Ver más <AiOutlineRight className='ml-2' /></button>
            </div>
        </div>
    )
}

export default CardBruno2