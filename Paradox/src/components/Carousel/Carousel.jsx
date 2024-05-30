import React from 'react';
import { useScrollInfo } from '../../hooks/useScrollInfo';
import { Link } from 'react-router-dom';

export function   Carousel({ dataProjects = [] }) {

  const truncateDescription = (description) => {
    const words = description?.split(' ');
    if (words?.length > 30) {
      return `${words.slice(0, 30).join(' ')}...`;
    }
    return description;
  };

  const { currentIndex, previousInfo, nextInfo, getPreviousIndex, getNextIndex } = useScrollInfo(dataProjects);

  return (
    <div className="flex justify-center items-center w-screen mb-36 mt-10 cell:mt-24">
      <div className="relative w-11/12 h-4/12 p-2">
        <div className="flex items-center justify-center relative h-full">
          <div className="w-2/6 h-4/6 absolute left-0 border-2 p-1 rounded-2xl border-[#BE7DDD] transition duration-500 transform opacity-70 hover:scale-110 hover:opacity-100">
            <img
              src={dataProjects[getPreviousIndex()]?.imageUrl}
              alt={`Slide ${getPreviousIndex() + 1}`}
              className="w-full h-full object-cover rounded-2xl hover:shadow-lg cursor-pointer"
              onClick={previousInfo}
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-full overflow-hidden border-2 border-[#BE7DDD] p-1 rounded-2xl relative z-10 items-center justify-center cell:w-[900px] cell:h-[520px]">
              <Link to={`/projectoverview/${dataProjects[currentIndex]?.id}`}>
                <img
                  src={dataProjects[currentIndex]?.imageUrl}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </Link>
            </div>
            <div className="w-full h-auto absolute top-full overflow-hidden">
              <h2 className="text-[#BE7DDD] text-2xl cell:text-4xl text-center underline font-extrabold">
                {dataProjects[currentIndex]?.title}
              </h2>
              <p className="break-words text-center cell:text-xl font-light mt-4 cell:px-40">
                {truncateDescription(dataProjects[currentIndex]?.description)}
              </p>
            </div>
          </div>
          <div className="w-2/6 h-4/6 absolute right-0 border-2 border-[#BE7DDD] p-1 rounded-2xl transition duration-500 transform opacity-70 hover:scale-110 hover:opacity-100">
            <img
              src={dataProjects[getNextIndex()]?.imageUrl}
              alt={`Slide ${getNextIndex() + 1}`}
              className="w-full h-full object-cover rounded-2xl hover:shadow-lg cursor-pointer"
              onClick={nextInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
