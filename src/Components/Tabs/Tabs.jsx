// eslint-disable-next-line react/prop-types
export const Tabs = ({ children, buttons, ButtonsContainer = "menu" }) => {
  return (
    <>
      <ButtonsContainer className="examples__menu">
        {buttons}
      </ButtonsContainer>
      {children}
    </>
)
}