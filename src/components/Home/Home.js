import React from "react";
import Miyazaki from "../../assets/img/ghibli2.png";

const Home = () => {
  return (
    <div className=' grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 p-4 m-8  '>
      <h1 className=' text-center  m-auto font-extrabold font-body text-4xl '>
        Hayao Miyazaki 宮崎駿
      </h1>
      <img
        className='m-auto lg:w-11/12 contrast-100 sm:w-7/12 md:w-7/12 '
        src={Miyazaki}
        alt=''
      />
      <p className=' lg:p-6 md:p-6 sm:p-8 m-auto grid text-lg font-body   bg-orange-100 rounded-md '>
        Hayao Miyazaki (宮崎 駿, Miyazaki Hayao, born January 5, 1941, in Tokyo,
        Japan) is a Japanese director, animator and cartoonist. He adopted
        several aliases throughout his career, such as Saburo Akitsu (あきつ
        さぶろう), Tsutomu Teruki (照樹 務 , working at TMS Entertainment) and
        Miya Iwasaki. He is the co-founder of Studio Ghibli and is the Chairman
        of the Tokuma Memorial animation Cultural Foundation and Mitaka
        Municipal Animation Museum of Art (Ghibli Museum). He's also an active
        member of the Totoro no Furusato Foundation.
        <a
          className='text-blue-500 hover:text-red-500 text-2xl'
          href='https://en.wikipedia.org/wiki/Hayao_Miyazaki'
          target='_blank'
          rel='noreferrer'
        >
          More Info... Wikipedia
        </a>
      </p>
    </div>
  );
};

export default Home;
