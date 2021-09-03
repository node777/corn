import React from 'react';
import styled from 'styled-components'
import Card from '../../../components/card';

const CardWrapper = styled.div`
  .head{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .cornImg{
        background-color: var(--Brand-Color-2);
        padding: 10px;
        margin-top: 10px;
        margin-bottom: 5px;
        border-radius: 50%;
    }
  }
    h2{
        font-size: 24px;
        color: var(--Brand-Color-2);
    }
   
    .flexWrapper{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        h4,h6{
            color: var(--Brand-Color-2);
        }
        h4{
            font-size: 24px;
        }
        h6{
            margin: 0;
            font-size: 16px;
            font-weight: 400;
        }
        .cornsCount{
            font-size: 40px;
            font-weight: 500;
            margin: 5px 0 5px 0;
        }
        .moneyCollect{
            font-size: 16px;
            font-weight: 400;
        }
        #wallet{
            margin-top: 30px;
        }
        button{
            background-color: #FEDD40;
            padding: 4px 30px;
            border-radius: var(--radius-1);
            border: none;
            font-size: 16px;
            font-weight: 600
        }
    }
    button{
        cursor: not-allowed;
    }
    .harvestBtn{
        background-color: var(--Brand-Color-2);
        padding: 10px 0;
        border-radius: var(--radius-1);
        border: none;
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        margin-top: 40px;
    }
   
`

const FarmsStackingCard: React.FC = () => {
    return(
        <CardWrapper>
            <Card>
                <div>
                    <div className='head'>
                        <div>
                            <h2>Farms & Staking</h2>
                            <span>
                                <img src={`${process.env.PUBLIC_URL}/assets//images/home/corn.svg`} className='cornImg' alt='corn'/>
                            </span>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/assets//images/home/info.svg`} alt='info'/>
                    </div>
                    <div className='flexWrapper'>
                        <div>
                            <div id='harvest'>
                                <h6>CORN to harvest</h6>
                                <h4 data-CORN_to_harvest='11.000' className='cornsCount'>11.000</h4>
                                <h6 data-Money_to_collect='~ $10.00' className='moneyCollect'>~ $10.00</h6>
                            </div>
                            <div id='wallet'>
                                <h6>CORN in Wallet</h6>
                                <h4 data-CORN_to_harvest='11.000' className='cornsCount'>11.000</h4>
                                <h6 data-Money_to_collect='~ $10.00' className='moneyCollect'>~ $10.00</h6>
                            </div>
                        </div>
                        <button type='button'>Add to MM</button>
                    </div>
                    <button type='button' className='harvestBtn'>Harvest(1)</button>
                </div>
            </Card>
        </CardWrapper>
    )
}

export default FarmsStackingCard;