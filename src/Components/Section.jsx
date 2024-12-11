// eslint-disable-next-line react/prop-types
export const Section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}