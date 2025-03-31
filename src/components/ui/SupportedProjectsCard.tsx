/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
function SupportedProjectsCard({
  title,
  description,
  link,
  src,
}: {
  title: string
  description: string
  link: string
  src: string
}) {
  return (
    <Link href={link} className="w-full" target="_blank">
      {/* <div className="border rounded-lg flex justify-start items-start gap-4 overflow-hidden min-h-[200px]">
				<div className="w-[200px] h-full">
					<img
						src={src}
						alt="Green Algeria"
						className="object-cover w-full h-full"
					/>
				</div> */}
      <div className="flex flex-row gap-1 border overflow-hidden rounded-lg w-full transition-all duration-300 hover:-translate-y-[1px] hover:translate-x-[2px] hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 group bg-white dark:bg-black">
        <img src={src} alt="Poster Image" className="object-cover w-[150px]" />
        <div className="flex px-4 py-6 flex-col justify-start items-start">
          <h2 className="text-md md:text-md my-1">{title}</h2>
          <p className="text-xs md:text-sm text-muted-foreground font-normal">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default SupportedProjectsCard
