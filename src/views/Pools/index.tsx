import { Grid } from "@material-ui/core";
import styled from "styled-components";
import Layout from "../../components/Layout";
import SingleCard from "./subComponents/SingleCard";

const Div = styled.div`
    .card-wrapper{
        margin-top: 50px;
        > div{
            > div:first-child{
                > div: last-child{
                    text-align: right;
                    h6{
                        background-color: var(--Brand-Color-3);
                        text-align: center;
                        font-weight: bold;
                        border-radius: var(--radius-2);
                        color: var(--Brand-Color-1);
                        font-weight: bold;
                        display: inline-block;
                        padding: 5px 25px;
                    }
                }
                margin-bottom: 25px;
            }
            >div:nth-child(2) , >div:nth-child(3), >div:nth-child(4){
                font-weight: 500;
                margin-top: 10px;
            }
            >div:nth-child(4){
                padding: 40px 0;
                margin: 30px 0;
                border-top: solid 1px;
                border-bottom: solid 1px;
                .value{
                    font-weight: bold;
                    color: #BDC2C4;
                    font-size: 20px;
                    margin-bottom: 10px;
                }
                button.harvest{
                    background-color: #E9EAEB;
                    border-color: #E9EAEB;
                    box-shadow: none;
                    color: #BDC2C4;
                    padding: 10px 24px;
                    border: none;
                    border-radius: var(--radius-1);
                    font-weight: bold;
                    &.disabled{
                        cursor: not-allowed;
                    }
                }
                button.approve{
                    background-color: var(--Brand-Color-2);
                    padding: 10px 0;
                    border-radius: var(--radius-1);
                    border: none;
                    font-size: 16px;
                    font-weight: 700;
                    width: 100%;
                    margin-top: 40px;
                }
            }
            .details{
                button{
                    background: none;
                    color: white;
                    border: none;
                    width: 100%;
                    font-weight: 600;
                    margin-bottom: 10px;
                    &:focus{
                        outline: none;
                    }
                }
                > div {
                    font-weight: bold;
                }
            }
        }
    }
`
const Pools = () => {
    return(
        <Div>
            <Layout>
                <h1 className='page-title'>Pools</h1>
                <Grid container justify='space-between' spacing={2}>
                    <Grid item xs={12} md={6} lg={4} className='card-wrapper'>
                        <SingleCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className='card-wrapper'>
                        <SingleCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className='card-wrapper'>
                        <SingleCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className='card-wrapper'>
                        <SingleCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className='card-wrapper'>
                        <SingleCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className='card-wrapper'>
                        <SingleCard />
                    </Grid>
                </Grid>
            </Layout>
        </Div>
    )
}

export default Pools;