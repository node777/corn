import styled from "styled-components";
import Header from "./subComponents/header";
import Menu from "./subComponents/menu";

interface IProps {
    children: React.ReactNode
}

const Div = styled.div`
    .menu{
        background-color: var(--Brand-Color-1);
        min-width: 250px;
        nav{
            padding: 45px 0;
            color: var(--Brand-Color-2);
            position: relative;
            height: 100%;
            > div{
                position: absolute;
                bottom: 0;
            }
            a{
                display: block;
                cursor: pointer;
                margin-bottom: 30px;
                text-decoration: none;
                color: var(--Brand-Color-2);
                padding: 0 50px;
            }
        }
    }
    div.body-container{
        display: grid;
        grid-template-columns: auto 1fr;
        height: calc( 100vh - 101px );
        overflow: hidden;
        > div:last-child{
            padding: 30px 50px;
            overflow-y: scroll;
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
                <div>
                    {children}
                </div>
            </div>
        </Div>
    )
}

export default Layout;