import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section>
            <div className='absolute top-0 left-0 mt-17 w-full h-screen bg-[url(../public/g.png)] bg-cover opacity-40'>
            </div>
            <div className='mt-50 ml-180'>
                <div className='font-serif font-semibold opacity-40 text-3xl'>
                    Progress is built one commit at a time </div>
                <div className='text-5xl font-serif font-extrabold mt-5'>
                    Sai Ganesh <br />
                    Full Stack Developer

                </div>
                <div className='text-xl mt-8 font-mono opacity-80'>
                    Building scalable web applications with
                    React ,Node.js, TypeScript<br /> and modern technologies.
                    Focused on performance, clean architecture
                    exceptional user experience.

                </div>
            </div>
            <div className='ml-225 mt-17 flex gap-4'>
                <button className=' border border-black-900 rounded-md bg-gray-300 px-6 py-3 text-lg font-semibold shadow-8xl'> View My Work  </button>
                <button className=' border border-[#5c4738] rounded-md bg-mauve-950 text-white px-6 py-3 text-lg font-semibold shadow-8xl'> Connect with Me </button>
            </div>

        </section>
    );
};
