"use client";

import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react";
import { FaRegCommentDots } from "react-icons/fa";
import Image from "next/image";
import { DotButton, useDotButton } from "@/components/Dot";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/Arrows";

const Testing = ({category}) => {
  const options = { loop: true };
  const SLIDE_COUNT = 2;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const slides = SLIDES;

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>

      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div
                className=" my-10 z-50 relative backdrop-blur-xl bg-no-repeat  h-[20rem]"
              >
                <Image
                  src="https://images.pexels.com/photos/30368360/pexels-photo-30368360/free-photo-of-vibrant-berlin-street-graffiti-and-train-scene.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Carousel Image"
                  layout="fill"
                  objectFit="cover"
                  width={400}
                  height={400}
                  className="top-0 z-[2]"
                />
                <div className="absolute z-[2] h-full w-full bg-black opacity-50 top-0 left-0"></div>
                <Link href='/' className="pt-4 absolute font-pop text-xl z-20 text-white w-[70%] pl-4">
                  {category}
                </Link>

                <article className="absolute bottom-0 z-20 flex justify-between border-t w-full py-3 px-2">
                  <div className="flex gap-2">
                    <span className="bg-white text-xs text-black font-pop py-1 px-2 rounded-sm">
                      self care
                    </span>
                    <span className="text-white">by Elliot Anderson</span>
                  </div>
                  {/*  */}
                  <div className="flex gap-2 items-center">
                    <span className="text-white">
                      <FaRegCommentDots className="" />
                    </span>
                    <span className="text-white">5</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testing;
