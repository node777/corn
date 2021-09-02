import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

type TmenuItemsList = {
    icon: string,
    title: string,
    path: string
}

const menuItemsList:TmenuItemsList[]=[
    {
        icon: `${process.env.PUBLIC_URL}/assets/images//menu/home.svg`,
        title: 'Home',
        path: "/home"
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/images/menu/trade.svg`,
        title: 'Trade',
        path: "/trade"
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/images/menu/farms.svg`,
        title: 'Farms',
        path: "/farms"
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/images/menu/pools.svg`,
        title: 'Pools',
        path: "/pools"
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/images/menu/info.svg`,
        title: 'Listings',
        path: "/listings"
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/images/menu/info.svg`,
        title: 'Charts',
        path: "/charts"
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/images/menu/info.svg`,
        title: 'More',
        path: "/more"
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/images/menu/info.svg`,
        title: 'Audit',
        path: "/audit"
    }
]

const Nav = styled.nav`
    img{
        width: 25px;
    }
    h6{
        margin: 0 10px;
    }
`

const Menu = () => {
    return(
        <Nav>
            {menuItemsList.map((item, index) => {
                return(
                    <Link to={item.path} key={index}>
                        <Grid container alignItems='center'>
                            <Grid item>
                                <img src={item.icon} alt='icon'/>
                            </Grid>
                            <Grid item>
                                <h6>{item.title}</h6>
                            </Grid>
                        </Grid>
                    </Link>
                )
            })}
        </Nav>
    )
}

export default Menu;