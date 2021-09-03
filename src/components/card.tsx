import styled from "styled-components";

type TCard = {
    children: React.ReactNode;
}

const Div = styled.div`
    background-color: var(--Brand-Color-1);
    color: var(--Brand-Color-2);
    padding: 24px;
    border-radius: var(--radius-1);
    height: 100%;
`

const Card:React.FC<TCard> = ({children}) =>{
    return(
        <Div>
            {children}
        </Div>
    )
}

export default Card;