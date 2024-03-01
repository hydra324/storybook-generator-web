import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './emblacarousel.css';
import {HStack, Image, VStack} from '@chakra-ui/react';

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
    <HStack className='embla-hstack' h="100%">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <VStack className="embla embla-vstack">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((url,index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <Image objectFit="fill" src={url} w="100%" h="100%" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VStack>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </HStack>
  )
}

export default EmblaCarousel

