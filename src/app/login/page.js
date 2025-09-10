import Image from 'next/image'
import React from 'react'
import RegisterFrom from './components/LogingFrom'
import LogInFrom from './components/LogingFrom'


export default function Loginpage() {
  return (
    <>
    <h1 className='text-3xl font-bold text-center my-8'>LogIn</h1>
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

            <LogInFrom></LogInFrom>
  

        </div>


    </section>
      
    </>
  )
}
