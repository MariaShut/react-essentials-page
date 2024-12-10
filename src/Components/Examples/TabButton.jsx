/* eslint-disable react/prop-types */
export const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button className={`examples__btn ${isSelected && "active"}`} onClick={onSelect}>{children}</button>
    </li>
  )
}