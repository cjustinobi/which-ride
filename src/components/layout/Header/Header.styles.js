import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  #hide-menu {
    display: none;
  }
  
  ul li {
    display: inline;
    margin: 0 20px;
  }
  
   @media screen and (max-width: 767px) {
     ul {
      display: none;
     }  
  }

`

export const OpenMenu = styled.div` 
display: none;
  div {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    
  }
 
  
   @media screen and (max-width: 767px) {
     display: block;   
  }

`