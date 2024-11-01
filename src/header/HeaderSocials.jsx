import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import styled from 'styled-components';





const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='blank'><CiLinkedin /></a>
        <a href="https://github.com" target='blank'><FaGithub /></a>
        <a href="https://dribble.com" target='blank'><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocials
const div = styled.div`
  
`