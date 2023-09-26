import React from 'react';
import profileCard from '../assets/projects/profileCard.png';
import movieBox from '../assets/projects/movieBox.png';
import dndApp from '../assets/projects/dndApp.png';


const Project = () => {
  
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#C2FFCF]'>Projects</p>
          <p className='py-6'>" Check out some of my recent projects</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* Projects in a grid */}
            <div style={{backgroundImage: `url(${profileCard})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div">
                {/* Hover effect for image */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font-bold text-white tracking-wider ">Profile Card</span>
                    <div className="pt-8 text-center ">

                        {/* eslint-disable-next-line */}
                        <a href='https://bumblebeestage1.netlify.app/' target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a href='https://github.com/Ayomide0123/HNG_Stage-One' target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>

                    </div>
                </div>
            </div>


            <div style={{backgroundImage: `url(${movieBox})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div">
                {/* Hover effect for image */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font-bold text-white tracking-wider ">Movie Box</span>
                    <div className="pt-8 text-center ">

                        {/* eslint-disable-next-line */}
                        <a href='https://bumblebeestage2.netlify.app/' target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a href='https://github.com/Ayomide0123/HNG_Stage-Two' target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>

                    </div>
                </div>
            </div>
            

            <div style={{backgroundImage: `url(${dndApp})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div">
                {/* Hover effect for image */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font-bold text-white tracking-wider ">Drag n' Drop App</span>
                    <div className="pt-8 text-center ">

                        {/* eslint-disable-next-line */}
                        <a href='https://bumblebeestage3.netlify.app/' target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a href='https://github.com/Ayomide0123/HNG_Stage-Three' target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>

                    </div>
                </div>
            </div>


        </div>
      </div>
    </div>
  );
};

export default Project;