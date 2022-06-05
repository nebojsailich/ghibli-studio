import React from "react";
import G1 from "../../assets/posters/1.jpg";
import G2 from "../../assets/posters/2.jpg";
import G3 from "../../assets/posters/3.jpg";
import G4 from "../../assets/posters/4.jpg";
import G5 from "../../assets/posters/5.jpg";
import G6 from "../../assets/posters/6.jpg";
import G7 from "../../assets/posters/7.jpg";
import G8 from "../../assets/posters/8.jpg";
import G9 from "../../assets/posters/9.jpg";
import G10 from "../../assets/posters/10.jpg";
import G11 from "../../assets/posters/11.jpg";
import G12 from "../../assets/posters/12.jpg";
import G13 from "../../assets/posters/13.jpg";

function Movies() {
  return (
    <div className=' grid lg:mx-40 sm:mx-20 md:mx-20 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 p-2  '>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900  lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G1} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          Nausicaa The Valley of the Wind 1984
        </p>
      </div>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900 lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G2} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          Princess Mononoke 1997
        </p>
      </div>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900 lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G3} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          Spirited Away 2001
        </p>
      </div>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900  lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G4} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          Castle in the Sky 1986
        </p>
      </div>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900 lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G5} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          My Neighbor Totoro 1988
        </p>
      </div>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900  lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G6} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          Howl's Moving Castle 2004
        </p>
      </div>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900  lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G7} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          Kiki's Delivery Service 1989
        </p>
      </div>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900  lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G8} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          The Wind Rises 2013
        </p>
      </div>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900 lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G9} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          {" "}
          Ponyo 2008
        </p>
      </div>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900  lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G10} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          Whisper of the Heart 1995
        </p>
      </div>
      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900  lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G11} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          Porco Rosso 1992
        </p>
      </div>

      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900  lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G12} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          From Up on Poppy Hill 2011
        </p>
      </div>

      <div className=' p-1 m-2 mx-auto max-w-xs bg-slate-900  lg:mx-2 sm:mx-2  rounded-sm '>
        <img src={G13} alt='ghibli' />
        <p className='text-center p-2 text-white font-medium text-1xl'>
          Arrietty 2010
        </p>
      </div>
    </div>
  );
}

export default Movies;
