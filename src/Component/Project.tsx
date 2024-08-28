import React from 'react';

export default function Project({isDarkMode}:{isDarkMode:boolean}) {
  return (
    <section id="projects" className={`p-10 w-5/6 m-auto ${isDarkMode ? 'bg-zinc-800' : 'bg-pink-100'}`}>
      <div className="heading text-center text-4xl text-wrap font-extrabold bg-clip-text">Projects</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 py-20 w-4/5 m-auto">
        {/* Add project cards here */}
        

        <div className={`shadow-md transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.02] hover:shadow-black rounded-lg max-w-sm ${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}>
          <img className="rounded-md" src="/images/Screenshot (353) (1).png" alt="BIDNEST" />
          <div className="p-5">
            <h5 className={`font-bold text-2xl tracking-tight mb-2  ${isDarkMode ? 'text-white' : 'text-black'}`}>BIDNEST</h5>
            <p  className={`font-normal mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>A fullstack auction platform using Node.js, Express, and React.js with real-time bidding, ElasticSearch, Redis caching, and AWS-S3 image storage.</p>
            <a href="https://github.com/vaibhav1710/BidNest" className={`border text-pink-700 border border-pink-500 hover:bg-pink-500'  ${isDarkMode ? 'hover:text-white' : 'hover:text-black' } focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:focus:ring-blue-800`}>Know more</a>
          </div>
        </div>
        
        <div className={`shadow-md transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.02] hover:shadow-black rounded-lg max-w-sm ${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}>
          <img className="rounded-md" src="/images/imresizer-portfolio (1).jpg" alt="Portfolio website" />
          <div className="p-5">
            <h5 className={`font-bold text-2xl tracking-tight mb-2  ${isDarkMode ? 'text-white' : 'text-black'}`}>PORTFOLIO WEBSITE</h5>
            <p className={`font-normal mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>A personal portfolio website built with React.js, TypeScript, Framer Motion for animations, and Tailwind CSS for styling.</p>
            <a href="https://github.com/vaibhav1710/react-port" className={`border text-pink-700 border border-pink-500 hover:bg-pink-500'  ${isDarkMode ? 'hover:text-white' : 'hover:text-black' } focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:focus:ring-blue-800`}>Know more</a>
          </div>
        </div>
 
        <div className={`shadow-md transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.02] hover:shadow-black rounded-lg max-w-sm ${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}>
          <img className="rounded-md" src="/images/imresizer-1703783635667.jpg" alt="Pinterest Clone" />
          <div className="p-5">
            <h5 className={`font-bold text-2xl tracking-tight mb-2  ${isDarkMode ? 'text-white' : 'text-black'}`}>PINTEREST CLONE</h5>
            <p  className={`font-normal mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>Pinterest-inspired platform enabling users to create accounts, share pins, curate boards, and save inspiring posts.</p>
            <a href="https://github.com/vaibhav1710/Pinterest-Clone" className={`border text-pink-700 border border-pink-500 hover:bg-pink-500'  ${isDarkMode ? 'hover:text-white' : 'hover:text-black' } focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:focus:ring-blue-800`}>Know more</a>
          </div>
        </div>
        

        <div className="max-w-2xl mx-auto">
        <div className={`shadow-md transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.02] hover:shadow-black rounded-lg max-w-sm ${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}>
          <img className="rounded-md" src="/images/topicsy.png" alt="Pinterest Clone" />
          <div className="p-5">
            <h5 className={`font-bold text-2xl tracking-tight mb-2  ${isDarkMode ? 'text-white' : 'text-black'}`}>TOPICSY</h5>
            <p  className={`font-normal mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>A full-stack news application that aggregates and displays news across various genres, providing a comprehensive news experience.

</p>
            <a href="https://github.com/vaibhav1710/Topicsy" className={`border text-pink-700 border border-pink-500 hover:bg-pink-500'  ${isDarkMode ? 'hover:text-white' : 'hover:text-black' } focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:focus:ring-blue-800`}>Know more</a>
          </div>
        </div>
        </div>
        {/* Add more project cards */}
      </div>
    </section>
  );
}
