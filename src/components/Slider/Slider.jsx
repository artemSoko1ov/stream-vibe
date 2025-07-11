import "swiper/css"
import "./Slider.scss"
import CategoryCard from "../CategoryCard"
import SliderNavigation from "./components/SliderNavigation"

  const defaultsSliderParams = {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
  }

const Slider = (props) => {
    const {
        children,
        navigationTargetElementId = null,
        sliderParams = defaultsSliderParams,
    } = props

  return (
    <div 
    className="slider" 
    data-js-slider={JSON.stringify({
      sliderParams,
      navigationTargetElementId,
    })}
    >
      <div 
      className="slider__swiper swiper" 
      data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
                {slide}
            </li>
          ))}
        </ul>
      </div>
        
          {!navigationTargetElementId && (
            <SliderNavigation 
                className="slider__navigation"
                
            />
          )}
    </div>
  )
}

export default Slider
