import React from 'react';
import styled from 'styled-components'

const CardWrapper = styled.div`
  .head{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    h2{
        font-size: 24px;
        color: var(--Brand-Color-2);
        margin-bottom: 35px;
    }
   }
   background-color: var(--Brand-Color-1);
   padding: 24px;
   border-radius: var(--radius-1);
   .feed{
       text-align: center;
   }
`

const TwitterFeedCard: React.FC = () => {
    return(
        <CardWrapper>
            <div>
                <div className='head'>
                    <h2>Announcements</h2>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/home/info.svg`} alt='info'/>
                </div>
                <div className='feed'>
                    <img src={`${process.env.PUBLIC_URL}/assets//images/home/feed.svg`} alt='info'/>
                </div>
            </div>
        </CardWrapper>
    )
}

export default TwitterFeedCard;