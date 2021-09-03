import { Grid } from "@material-ui/core";
import Card from "../../../components/card";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useState } from "react";

const SingleCard = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return(
        <Card>
            <Grid container justify='space-between' alignItems='center'>
                <Grid item>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/farms/whiteCircle.svg`} alt="img"/>
                </Grid>
                <Grid item>
                    <h6>40X</h6>
                    <h3>CAKE-BNB</h3>
                </Grid>
            </Grid>
            <Grid container justify='space-between' alignItems='center'>
                <Grid item>
                    APR:
                </Grid>
                <Grid item>
                    37.5%
                </Grid>
            </Grid>
            <Grid container justify='space-between' alignItems='center'>
                <Grid item>
                    Earn:
                </Grid>
                <Grid item>
                    TOKEN
                </Grid>
            </Grid>
            <Grid container justify='space-between' alignItems='center'>
                <Grid item>
                    <div>
                        <div>SHOPX Earned</div>
                        <div className='value'>0.000</div>
                    </div>
                    <div>
                        <div>CAKE-BNB LP Staked</div>
                        <div className='value'>0</div>
                    </div>
                </Grid>
                <Grid item>
                    <button className='harvest disabled'>Harvest</button>
                </Grid>
                <Grid item xs={12}>
                    <button className='approve'>
                        Approve Contract
                    </button>
                </Grid>
            </Grid>
            <Grid className='details'>
                <button onClick={() => setIsExpanded(!isExpanded)}>
                    {
                        !isExpanded ?
                        <>
                            <span>Details</span>
                            <ExpandMoreIcon />
                        </>
                        :
                        <>
                            <span>Hide</span>
                            <ExpandLessIcon />
                        </>
                    }
                </button>
                {
                    isExpanded ?
                        <>
                            <Grid container justify='space-between' alignItems='center'>
                                <Grid item>
                                    Your Initial Deposit:
                                </Grid>
                                <Grid item>                                             
                                    $900,518,022
                                </Grid>
                            </Grid>
                            <Grid container justify='space-between' alignItems='center'>
                                <Grid item>
                                Total Liquidity:
                                </Grid>
                                <Grid item>                                             
                                    $900,518,022
                                </Grid>
                            </Grid>
                        </>
                    : null
                }
            </Grid>
        </Card>
    )
}

export default SingleCard;