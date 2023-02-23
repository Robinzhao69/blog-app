import React from 'react'
import Image from 'next/legacy/image'

const Author = ({ author }) => {
    return (
        <div className='text-center mb-8 mt-20 p-12 relative rounded-lg bg-black bg-opacity-20'>
            <div className='absolute left-0 right-2 -top-14'>
                <Image src={author.photo.url} width="100px" height="100px" unoptimized alt={author.name} className="align-middle rounded-full"/>
            </div>
            <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
            <p className='text-white text-lg'>{author.bio}</p>
        </div>
    )
}

export default Author