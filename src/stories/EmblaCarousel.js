import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './emblacarousel.css';
import {HStack, Image} from '@chakra-ui/react';

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <HStack>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((url,index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <Image objectFit="cover" src={url} w="100%" h="100%" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </HStack>
  )
}

export default EmblaCarousel

