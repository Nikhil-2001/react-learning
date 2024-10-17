export default function Tabs({buttons, children, buttonsContainer = "menu"}){
    const ButtonsContainer = buttonsContainer
    return ( 
    <>
    <ButtonsContainer>
        {buttons}
    </ButtonsContainer>
    {children}
    </>
)
}