import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type TmenuItemsList = {
    icon: string,
    title: string,
    path: string,
    collapse?: object[]
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
        path: "/",
        collapse: [{title:'Exchange', path: '/exchange'}, {title:'Liquidity', path: '/liquidity'}]
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
        path: "/"
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/images/menu/info.svg`,
        title: 'Charts',
        path: "/"
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/images/menu/info.svg`,
        title: 'More',
        path: "/"
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/images/menu/info.svg`,
        title: 'Audit',
        path: "/"
    }
]

function toggleCollapse(e: any){
    e.target.closest('li').querySelector('.nested').classList.toggle('hidden');
}

const Nav = styled.nav`
    a{
        img{
            width: 25px;
        }
        h6{
            margin: 0 10px;
        }
    }
    .social-icons-wrap{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .nested{
        margin-top: -15px;
        margin-bottom: 25px;
        a{
            transform: translateX(35px);
            display: block;
            color: white;
            font-weight: 400;
            margin-bottom: 14px !important;
            text-decoration: none;
        }
        &.hidden{
            display: none;
        }
    }
`

const Menu = () => {
    return(
        <Nav>
            {menuItemsList.map((item, index) => {
                return(
                    <li className='item-wrapper' key={index} onClick={e => toggleCollapse(e)}>
                        <Link to={!item?.collapse ? item.path : "#"}  >
                            <Grid container alignItems='center'>
                                <Grid item>
                                    <img src={item.icon} alt='icon'/>
                                </Grid>
                                <Grid item>
                                    <h6>{item.title}</h6>
                                </Grid>
                            </Grid>
                        </Link>
                        <div className='nested hidden'>
                            {
                                item?.collapse?.map((nestedItem : any,  nestedItemIndex: any)  => {
                                    return(
                                        <Link key={nestedItemIndex} to={nestedItem.path}>{nestedItem.title}</Link>
                                    )
                                })
                            }
                        </div>
                    </li>
                )
            })}
            <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item xs={7}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/menu/whiteCircle.svg`} alt='profile'/>
                    <span>1.43$</span>
                </Grid>
                <Grid item xs={4} className='social-icons-wrap'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/menu/twitter.svg`} alt='profile'/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/menu/telegram.svg`} alt='icon'/>
                </Grid>
            </Grid>
        </Nav>
    )
}

export default Menu;