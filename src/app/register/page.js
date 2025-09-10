import Image from 'next/image'
import React from 'react'
import RegisterFrom from './components/RegisterFrom'

export default function Registerpage() {
  return (
    <>
    <h1 className='text-3xl font-bold text-center my-8'>Register</h1>
    <section className='container mx-auto grid grid-cols-12'>
        <div className='col-span-12 md:col-span-6 flex justify-center items-center'>
            <Image className='hidden md:block'
            
            src={"/assets/images/login/login.svg"}
            width={460}
            height={500}
            alt={'img'}
            />



       

        </div>

        <div className='col-span-12 md:col-span-6 flex justify-center items-center'> 
            <RegisterFrom></RegisterFrom>

        </div>


    </section>
      
    </>
  )
}
