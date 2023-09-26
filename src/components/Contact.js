import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/cc22fc85-7089-419b-bd39-7aca815a250e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#C2FFCF] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>" Submit the form below or shoot me an email - oyetimehin31@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#C2FFCF] hover:border-[#C2FFCF] hover:text-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact