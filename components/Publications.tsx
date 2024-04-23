"use client";

import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';
import { PoppinsFont, MontserratFont } from '@/constants';
import Image from 'next/image';

export interface PublicationsProps {
    title: string
    link: string
    pubDate: string
    category: string[]
    thumbnail: string
    description: string
}

const formatDate = (dateString:string) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

    return formattedDate;
};

const Publications = () => {
    const [data, setData] = useState<PublicationsProps[]>([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/publications')
            .then((res) => res.json())
            .then((data) => {
            setData(data)
            setLoading(false)
            })
        }, [])
    
    if (isLoading) return <p>Loading publications...</p>
    if (!data) return <p>No publications found</p>

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100}}
                transition={{ duration: 0.5 }}
                className={cn("my-20 text-center text-4xl", MontserratFont.className)}
            >
                Publications
            </motion.h2>
            <div id="publications">
                {data.map((publication, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center pb-4">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100}}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 flex flex-col"
                        >
                            <div>
                                <a href={publication.link} target="_blank" className='hover:opacity-90'>
                                    <h6 className="mb-2 font-semibold">
                                        {publication.title}
                                    </h6>
                                </a>
                            </div>
                            <div>
                                {publication.category.map((category, index) => (
                                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300">
                                        {category}
                                    </span>
                                ))}
                            </div>
                            <div className={cn('pt-8 pb-4', MontserratFont.className)}>
                                {publication.description}
                            </div>
                            <div className='mt-auto'>
                                <p className="mb-2 text-sm text-neutral-400">{formatDate(publication.pubDate)}</p>
                            </div>
                        </motion.div>
                        <motion.a
                            href={publication.link}
                            target="_blank"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100}}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 flex justify-center items-center"
                        >
                            <Image
                                src={publication.thumbnail}
                                alt={publication.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '60%', height: 'auto' }}
                                className="rounded-lg opacity-100 items-center hover:opacity-90"
                            />
                        </motion.a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Publications