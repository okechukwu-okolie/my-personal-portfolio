import React from 'react'
import styled from 'styled-components'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <Container>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Hajia Bintu</h1>
            <h5 className="text-light">Fullstack Developer</h5>
             <CTA/>
             <HeaderSocials/>

             <div className="me">
              <img src="/hoodieWoman2-removebg-preview.png" alt="" />
             </div>

             <a href="" className='scroll-down'>scroll down </a>
             
        </div>

    </Container>
  )
}

export default Header

const Container =styled.div`
  height: 100vh;
  padding-top: 6rem;
  overflow: hidden;

  .header__container{
    text-align:  center;
    height: 100%;
    position:relative;
  }


  /* ************************CTA */

  .cta{
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
  }

  .header__socials{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left:0;
    bottom: 13rem;
  }
  .header__socials::after{
    content: '';
    width: 1px;
    height: 2rem;
    background:var(--color-primary);
  }
/* *****************image */

  .me{
    background: linear-gradient(var(--color-primary),transparent);
    width: 22rem;
    height: 30rem;
    position: absolute ;
       left: calc(50%-11rem);
       margin-top: 4rem;
       border-radius: 12rem 21rem 0 0;
          
  }
  
`