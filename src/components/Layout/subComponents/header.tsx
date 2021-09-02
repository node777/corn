import { Grid } from "@material-ui/core";
import styled from 'styled-components'

const Div = styled.div`
    background-color: var(--Brand-Color-1);
    padding: 10px 30px;
    border-bottom: solid 1px;
    h2{
        color: var(--Brand-Color-2);
        font-size: 45px;
    }
    img{
        width: 80px;
    }
`

function Header(){
    return(
        <Div>
            <Grid container alignItems='center'>
                <Grid item>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/corn.svg`} alt='logo'/>
                </Grid>
                <Grid item>
                    <h2>Corn</h2>
                </Grid>
            </Grid>
        </Div>
    )
}

export default Header;