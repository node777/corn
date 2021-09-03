import styled from "styled-components";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Loader = () => {
    return(
        <Div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/loader.gif`} alt="loader"/>
        </Div>
    )
}

export default Loader;