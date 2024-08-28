import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

interface TimelineProps {
  isDarkMode: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ isDarkMode }) => {
  return (
    <section
      id="timeline"
      className={`${
        isDarkMode ? 'bg-zinc-800' : 'bg-pink-100'
      } ${isDarkMode?'text-white':'text-black'} w-5/6 m-auto p-10`}
    >
      <div className="timeline flex flex-col leading-loose justify-center items-center">
        <h1 className="heading text-4xl text-wrap font-extrabold bg-clip-text">
          TimeLine
        </h1>

        <div className="timelineouter p-5 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 m-auto w-full">
          
          <div className="timelineitems flex">
            <div className="icon mr-2 w-min rounded-md">
              <FaBriefcase className='mt-1'
                size={22}
                color={isDarkMode ? '#FFFFFF' : '#000000'} // Change color based on isDarkMode
              />
            </div>
            <div className="textt">
              <p className="period mb-2 bg-black w-max text-sm text-white rounded-md py-1 px-2">
                2023 Dec - 2024 Jun
              </p>
              <h5 className="title mb-2 font-bold">
                MENTOR
                <span className="font-semibold text-grey-400"> - TLE ELIMINATOR</span>
              </h5>
              <p className="description text-wrap">
                Mentoring students, addressing doubts, and creating video solutions for complex problems.
              </p>
            </div>
          </div>

          <div className="timelineitems flex">
            <div className="icon mr-2 w-min rounded-md">
              <FaBriefcase className='mt-1'
                size={22}
                color={isDarkMode ? '#FFFFFF' : '#000000'} // Change color based on isDarkMode
              />
            </div>
            <div className="textt">
              <p className="period mb-2 bg-black w-max text-sm text-white rounded-md py-1 px-2">
                2023 Apr - 2023 Jun 
              </p>
              <h5 className="title mb-2 font-bold">
                SDE INTERN
                <span className="font-semibold text-grey-400"> - GENPACT</span>
              </h5>
              <p className="description text-wrap">
                Designed and implemented RESTful APIs, contributed to technical documentation and attended SCRUM meetings, gaining experience in agile development practices.
              </p>
            </div>
          </div>

          <div className="timelineitems flex">
            <div className="icon mr-2 w-min rounded-md">
              <FaBriefcase className='mt-1'
                size={22}
                color={isDarkMode ? '#FFFFFF' : '#000000'} // Change color based on isDarkMode
              />
            </div>
            <div className="textt">
              <p className="period mb-2 bg-black w-max text-sm text-white rounded-md py-1 px-2">
                2022 Apr - 2022 Aug
              </p>
              <h5 className="title mb-2 font-bold">
                INTERN
                <span className="font-semibold text-grey-400"> - CODECHEF</span>
              </h5>
              <p className="description text-wrap">
              Resolved 300+ data structure and algorithm doubts, earned 97% positive feedback. Strengthened problem-solving skills, fostering personal growth and skill development.
              </p>
            </div>
          </div>

          <div className="timelineitems flex">
            <div className="icon mr-2 w-min rounded-md">
              <FaBriefcase className='mt-1'
                size={22}
                color={isDarkMode ? '#FFFFFF' : '#000000'} // Change color based on isDarkMode
              />
            </div>
            <div className="textt">
              <p className="period mb-2 bg-black w-max text-sm text-white rounded-md py-1 px-2">
                2020 Jun - 2024 Jun
              </p>
              <h5 className="title mb-2 font-bold">
                BTECH IT
                <span className="font-semibold text-grey-400"> - JSS NOIDA</span>
              </h5>
              <p className="description text-wrap">
                  Completed Btech in Information Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
