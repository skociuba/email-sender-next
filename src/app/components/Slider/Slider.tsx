'use client';
import React, {useState} from 'react';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
interface ArrowProps {
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  left?: boolean;
}

function Arrow({disabled, onClick, left}: ArrowProps) {
  const disabledClass = disabled ? ' opacity-50 cursor-not-allowed' : '';
  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-gray-500 p-2 text-white hover:bg-custom-purple focus:outline-none ${
        left ? 'mr-2' : 'ml-2'
      }${disabledClass}`}
      disabled={disabled}>
      {left ? '<' : '>'}
    </button>
  );
}

const TextSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper mt-8 flex p-10">
        {loaded && instanceRef.current && (
          <div className="mt-4 flex items-center justify-center">
            <Arrow
              left={true}
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            />
          </div>
        )}
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className="flex min-h-[500px] flex-col justify-center rounded bg-black text-white opacity-80">
              <div className="mb-5 w-full text-center">
                <h1 className="text-2xl">Summary</h1>
                <div className="m-5 flex flex-wrap">
                  <div className="  w-2/3 border-r-2 pr-5">
                    Hello, My name is Sebastian Kociuba. I am React front-end
                    developer with three years of commercial experience.
                    I&apos;m easy learning and hardworking person, who can work
                    on existing projects, as well as create new ones from
                    scratch. Without any issues I can add new features, find and
                    fix bugs, and make sure all well tested changes can go to
                    production using a full CI/CD pipeline. I get along easily
                    with people, and my English is good, so without any issues I
                    can talk and understand business requirements. I would be
                    very happy to talk more in person, and be able to present my
                    value and experience more in details to you and your company
                  </div>
                  <div className="flex w-1/3 flex-col items-center justify-center">
                    <Image
                      src="/images/profile.jpg"
                      alt="Profile"
                      width={150}
                      height={300}
                    />
                    <p> 505 683 245</p>
                    <p> kociuba.sebastian@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="flex min-h-[500px] flex-col justify-center rounded bg-black text-white opacity-80">
              <div className="mb-5 w-full text-center">
                <h1 className="text-2xl">Technologies I&apos;m using :</h1>
              </div>
              <div className="m-5 flex flex-wrap">
                <ul className="w-1/2">
                  <h2 className="text-xl"> Base:</h2>
                  <li className="pb-2"> - HTML5</li>
                  <li className="pb-2"> - CSS3</li>
                  <li className="pb-2">
                    - CSS in JS using emotion library and styled component
                  </li>
                  <li className="pb-2"> - Tailwind</li>
                  <li className="pb-2"> - Java Script ES6+</li>
                  <li className="pb-2"> - React.js</li>
                  <li className="pb-2"> - Next.js</li>
                  <li className="pb-2"> - Type Script</li>
                  <li className="pb-2"> - CI/CD Jenkins</li>
                  <li className="pb-2"> - git, github</li>
                  <li className="pb-2"> - Storybook</li>
                  <li className="pb-2"> - Express.js</li>
                  <li className="pb-2"> - Vercel</li>
                  <li className="pb-2"> - Mongo DB</li>
                </ul>
                <ul className="w-1/2">
                  <h2 className="text-xl"> Unit and integration tests:</h2>
                  <li className="pb-2"> - Jest, RTL</li>
                  <h2 className="text-xl"> E2E tests: </h2>
                  <li className="pb-2">
                    {' '}
                    - Testcafe cucumber Gherkin scenarios
                  </li>
                  <h2 className="text-xl"> Setting project using:</h2>
                  <li className="pb-2"> - CRA</li>
                  <li className="pb-2"> - Vite.js</li>
                  <h2 className="text-xl"> Linters:</h2>
                  <li className="pb-2">
                    {' '}
                    - eslint, prettier, stylelint, husky
                  </li>
                  <h2 className="text-xl"> State management:</h2>
                  <li className="pb-2">
                    {' '}
                    - redux-saga redux- thunk RTK query react Query
                  </li>
                  <h2 className="text-xl"> Validation:</h2>
                  <li className="pb-2"> - YUP and Formik ajv</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className="flex h-[500px] flex-col justify-center rounded bg-black text-white opacity-80">
              <div className="mb-5 w-full text-center">
                <h1 className="text-2xl">My experience:</h1>
              </div>
              <ul className="m-5">
                <li className="pb-2">
                  {' '}
                  - Junior Frontend Developer HSBC 2021 – now
                </li>
                <li className="pb-2">
                  - Operator of the cutting machine Lear Corporation 2010 – 2021
                </li>
                <li className="pb-2">
                  {' '}
                  - CSS in JS using emotion library and styled component
                </li>
                <li className="pb-2">
                  {' '}
                  - Shop–assistant in a furniture store Domex 2009 – 2010
                </li>
                <li className="pb-2">
                  {' '}
                  - Professional experience in forestry Nadleśnictwo Radymno
                  2007 – 2008
                </li>
              </ul>
              <div className="mb-5 w-full text-center">
                <h1 className="text-2xl"> My education:</h1>
              </div>

              <ul className="m-5">
                <li className="pb-2">
                  - University of Agriculture name of Hugon Kołłątaj in Cracow
                  2002 -2007
                </li>
              </ul>
            </div>
          </div>
        </div>

        {loaded && instanceRef.current && (
          <div className="mt-4 flex items-center justify-center">
            <Arrow
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array.from(
              {length: instanceRef.current.track.details.slides.length},
              (_, i) => i,
            ),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={'dot' + (currentSlide === idx ? ' active' : '')}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TextSlider;
