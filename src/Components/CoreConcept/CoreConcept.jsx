import './CoreConcept.css'

// eslint-disable-next-line react/prop-types
export const CoreConcept = ({ image, title, description }) => {
  return (
    <li className="core-concepts__list-item">
        <img className="core-concepts__img" src={image} alt={title} />
        <h3 className="core-concepts__title">{title}</h3>
        <p className="core-concepts__descr">{description}</p>
    </li>
  )
}