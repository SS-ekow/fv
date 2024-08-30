import Layout from '../components/layout';
import styled from 'styled-components';
import Button from '../components/ui/button';
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import ShopCard from '../components/ui/shopcard';

const Shop2 = () => {
  return (
    <Layout>
      <ShopStyled>
        <div className='discount'>
          <p>BEST DEALS</p>
          <h3>Sale of the Month</h3>
          <div className='countdown'>
            <div className='days'>
              <span>00 :</span>
              <span>DAYS</span>
            </div>
            <div className='hours'>
              <span>00 :</span>
              <span>HOURS</span>
            </div>
            <div className='mins'>
              <span>00 :</span>
              <span>MINS</span>
            </div>
            <div className='secs'>
              <span>00 :</span>
              <span>SECS</span>
            </div>
          </div>
          <Button buttonText='Shop Now'/>
        </div>
        <div className='filter'>
          <div className='filter-top'>
            <div className='left'>
              <Select label="Select category">
                <SelectItem key={1}>Something</SelectItem>
              </Select>
              <Select label="Select Price" color={'primary'}>
                <SelectItem key={1}>Something</SelectItem>
              </Select>
              <Select label="Select Rating">
                <SelectItem key={1}>Something</SelectItem>
              </Select>
            </div>
            <div className='right'>
              <Select label="Sort by: Latest">
                <SelectItem key={1}>Something</SelectItem>
              </Select>
              <Select label="Show: 16">
                <SelectItem key={1}>Something</SelectItem>
              </Select>
              
            </div>
          </div>
          <div className = 'filter-bottom'>
            <div className='left'>
              <p>Active Filters: </p>              
              <h5>Wing Chair</h5>
              <h5>Min GHC300- Max 500</h5>
                
              
            </div>
            <div className='right'>
              <h5><span>2,547</span> Results found.</h5>
            </div>
          </div>
        </div>
        <div className='products'>
          <ShopCard productName={'Red Chilli'} image={''} price={14.99} stars={0} />
          <ShopCard productName={'Red Chilli'} image={''} price={14.99} stars={0} />
          <ShopCard productName={'Red Chilli'} image={''} price={14.99} stars={0} />
          <ShopCard productName={'Red Chilli'} image={''} price={14.99} stars={0} />
          <ShopCard productName={'Red Chilli'} image={''} price={14.99} stars={0} />
          <ShopCard productName={'Red Chilli'} image={''} price={14.99} stars={0} />
          <ShopCard productName={'Red Chilli'} image={''} price={14.99} stars={0} />
          <ShopCard productName={'Red Chilli'} image={''} price={14.99} stars={0} />
        </div>

        
      </ShopStyled>
    </Layout>
  );
};


const ShopStyled = styled.div`
height: 100%;
width: 100%;
/* background: blue;
 */
.discount{
  width: 100%;
  height: 358px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  border-radius: 10px;
  background: yellow;
  margin-bottom: 1rem;
}

.filter{
  height: 120px;
  width: 100%;
  display: grid;
  grid-template-rows: 50% 50%;
  margin-bottom: 1rem;

  .filter-top, .filter-bottom{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
  }

  

  .left, .right{
    display: flex; 
    align-items: center;
    gap: 1rem;
  }
}

.products{
  width: 100%;
  min-height: 100vh;
  /* background: rgba(0,0,0,0.6); */
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
  

}

`

export default Shop2;