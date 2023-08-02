import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const renderSlider = () => (
    <Slider {...settings}>
      {planetsList.map(eachPlanet => (
        <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
      ))}
    </Slider>
  )

  return (
    <div className="planets-slider-container">
      <h1 className="main-heading">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        {renderSlider()}
      </div>
    </div>
  )
}

export default PlanetsSlider
