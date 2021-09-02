import styled from "styled-components";
import Layout from "../../components/Layout";
import AcrossPoolsFarmsCard from "./subComponents/AcrossPoolsFarmsCard";
import FarmsStackingCard from "./subComponents/FarmsStackingCard";
import HighestAPRCard from "./subComponents/HighestAPRCard";
import TwitterFeedCard from "./subComponents/TwitterFeedCard";

const Div = styled.div`{
    .cards-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
        > div {
          max-width: 430px;
          width: 100%;
          margin: 15px 30px;
        }
    }
  }`

function Home (){
    return(
        <Div>
            <Layout>
                <h1 className='page-title'>Home</h1>
                <div className='cards-container'>
                    <FarmsStackingCard />
                    <TwitterFeedCard />
                    <HighestAPRCard />
                    <AcrossPoolsFarmsCard />
                </div>
            </Layout>
        </Div>
    )
}

export default Home;