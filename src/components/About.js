import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#C2FFCF]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Ayomide. Welcome to my space.</p>
            </div>
            <div>
              <p>I am a highly balanced individual who thinks that nothing should be overlooked. I consider myself to be a diligent and hardworking individual. I want to be a part of an effective company where I can advance my knowledge and abilities, work in a challenging atmosphere, and create value.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;