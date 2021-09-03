import React from 'react';
import styled from 'styled-components'
import Card from '../../../components/card';

const CardWrapper = styled.div`
  .head{
    h2{
        font-size: 24px;
        color: var(--Brand-Color-2);
        margin-bottom: 25px;
    }
   }
   h4{
       color: var(--Brand-Color-2);
       margin-bottom: 10px
   }
`

const HighestAPRCard: React.FC = () => {
    return(
        <CardWrapper>
            <Card>
                <div>
                    <div className='head'>
                        <h2>Earn up to</h2>
                    </div>
                    <div>
                        <h4>55,000%</h4>
                        <h4>APR in farms</h4>
                    </div>
                </div>
            </Card>
        </CardWrapper>
    )
}

export default HighestAPRCard;