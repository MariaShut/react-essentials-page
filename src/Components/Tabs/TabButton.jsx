/* eslint-disable react/prop-types */
export const TabButton = ({ children, isSelected, ...props}) => {
  return (
    <li>
      <button className={`examples__btn ${isSelected && "active"}`} {...props}>{children}</button>
    </li>
  )
}