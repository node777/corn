import styled from "styled-components";
import Header from "./subComponents/header";
import Menu from "./subComponents/menu";

interface IProps {
    children: React.ReactNode
}

const Div = styled.div`
    .menu{
        background-color: var(--Brand-Color-1);
        padding: 45px;
        nav{
            color: var(--Brand-Color-2);
            a{
                display: block;
                cursor: pointer;
                margin-bottom: 20px;
                text-decoration: none;
                color: var(--Brand-Color-2)
            }
        }
    }
    div.body-container{
        display: grid;
        grid-template-columns: auto 1fr;
        height: calc( 100vh - 101px );
        > div{
            padding: 25px 50px;
        }
    }
`

const Layout: React.FC<IProps> = ({children}) =>{
    return(
        <Div>
            <Header />
            <div className='body-container'>
                <div className='menu'>
                    <Menu />
                </div>
                <div >
                    {children}
                </div>
            </div>
        </Div>
    )
}

export default Layout;