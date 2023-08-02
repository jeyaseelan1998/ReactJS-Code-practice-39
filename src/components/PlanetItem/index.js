import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {imageUrl, name, description} = planetDetails
  return (
    <div className="planet-item-container">
      <img className="planet-image" alt={`planet ${name}`} src={imageUrl} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
