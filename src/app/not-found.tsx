/* eslint-disable @next/next/no-img-element */
import AnimatedDiv from '@/components/AnimatedDiv'
import React from 'react'

function notFound() {
  return (
    <AnimatedDiv id={404}>
      <main className="container px-4 md:px-0 flex flex-col justify-center items-center gap-20 py-6 md:py-0">
        <section className="flex flex-col md:flex-row gap-5 min-h-[82vh] justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <p>
              <span className="text-[60px] font-bold text-red-500">404</span>
            </p>
            <p>
              <span className="text-[40px] md:text-[50px] text-zinc-950 dark:text-white">
                Page Not Found.
              </span>
            </p>
          </div>
        </section>
      </main>
    </AnimatedDiv>
  )
}

export default notFound
