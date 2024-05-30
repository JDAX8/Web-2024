import React, { useEffect, useState } from 'react';
import WhoWeAreImage from '../../assets/imgs/WhoWeAreImage.png';
import imggr1 from '../../assets/imgs/imggr1.png'; 
import imggr2 from '../../assets/imgs/imggr2.png'; 
import imggr3 from '../../assets/imgs/imggr3.png'; 
import imggr4 from '../../assets/imgs/imggr4.png'; 
import { useNavigate } from 'react-router-dom';
import { getAllUsersData } from '../../services/firebase';
import { Loader } from '../../components';

export function WhoWeAre() {

  const [developersData, setDevelopersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/profile/${id}`);
  };

  useEffect(() => {
    getAllUsersData()
      .then(usersList => {
        const filteredUsersList = usersList.filter(user => user.owner);
        setDevelopersData(filteredUsersList);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error: ', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative">

      <img
        className=" w-3/4 absolute inset-0 cell:w-[20%] cell:h-[40%] mx-auto top-1/2  transform  -translate-y-1/2 z-20"
        src={WhoWeAreImage}
        alt=""
      />
      
      <div className='flex w-full h-full relative'>
        <div className="flex-1 flex justify-center items-center w-full h-full hover:bg-transparent relative">
          <div className="absolute inset-0 w-full h-full pb-1 pr-1">
              <img
                className="w-full h-full"
                src={developersData[0]?.imageUrl}
                alt=""
              />
              <div className="flex w-full text-white text-4xl absolute top-1/2 left-1 justify-center">{developersData[0]?.name}</div>
          </div>
          <div className="absolute inset-0 w-full h-full bg-black pb-1 pr-1 hover:bg-transparent">
              <img
                className="w-full h-full cursor-pointer"
                src={imggr1}
                alt=""
                onClick={()=>handleOnClick(developersData[0]?.uid)}
              />
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center w-full h-full hover:bg-transparent relative">
          <div className="absolute inset-0 w-full h-full pb-1 pl-1">     
              <img
                className="w-full h-full"
                src={developersData[1]?.imageUrl}
                alt=""
              />
              <div className="flex w-full text-white text-4xl absolute top-1/2 left-1 justify-center">{developersData[1]?.name}</div>
          </div>
          <div className="absolute inset-0 w-full h-full bg-black pb-1 pl-1 hover:bg-transparent">
            <img
                  className="w-full h-full cursor-pointer"
                  src={imggr2}
                  alt=""
                  onClick={()=>handleOnClick(developersData[1]?.uid)}
                />
          </div>
        </div>
      </div>

      <div className='flex w-full h-full relative'>
        <div className="flex-1 flex justify-center items-center w-full h-full hover:bg-transparent relative">
          <div className="absolute inset-0 w-full h-full pt-1 pr-1">
              <img
                className="w-full h-full"
                src={developersData[2]?.imageUrl}
                alt=""
              />
              <div className="flex w-full text-white text-4xl absolute top-1/2 left-1 justify-center">{developersData[2]?.name}</div>
          </div>
          <div className="absolute inset-0 w-full h-full bg-black pt-1 pr-1 hover:bg-transparent">
          <img
                  className="w-full h-full cursor-pointer"
                  src={imggr3}
                  alt=""
                  onClick={()=>handleOnClick(developersData[2]?.uid)}
                />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center w-full h-full hover:bg-transparent relative">
          <div className="absolute inset-0 w-full h-full pt-1 pl-1">
              <img
                className="w-full h-full"
                src={developersData[3]?.imageUrl}
                alt=""
              />
              <div className="flex w-full text-white text-4xl absolute top-1/2 left-1 justify-center">{developersData[3]?.name}</div>
          </div>
          <div className="absolute inset-0 w-full h-full bg-black pt-1 pl-1 hover:bg-transparent">
          <img
                  className="w-full h-full cursor-pointer"
                  src={imggr4}
                  alt=""
                  onClick={()=>handleOnClick(developersData[3]?.uid)}
                />
          </div>
        </div>
      </div>

    </div>
  );
}