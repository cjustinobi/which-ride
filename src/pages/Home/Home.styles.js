import styled from 'styled-components'

export const Hero = styled.div`

  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 50px;
  }    
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    
    img {
      width: 100%;
      height: auto;
    }
  }                    
`

export const Flow = styled.div`
  padding: 100px 20%;
  background: #5C1A8D;
  color: #fefefe;
  
  .flow-text {
    width: 60%;
    margin: 0 auto;
    
     h1 {
      font-size: 30px;
      text-align: center;
    }  
    
    p {
      text-align: center;
    } 
    
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  
  .flow-details {
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    .steps {
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      align-items: center;
      
      h2, p {
        padding: 0 20px;
      }
    }
    
      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        
        img {
           width: 100%;
          height: auto;
        }
      }  
    }
  
  @media (max-width: 768px) {
    padding: 100px 12px;
  }               
`

export const Step = styled.div`
  width: 3.3em;
  height: 3.3em;
  line-height: 3.3em;
  text-align: center;
  padding: 5px;
  font-size: 11px;
  background: ${props => props.color};
  border-radius: 50%;
  color: #333;
`

export const WhyContainer = styled.div`
  padding: 40px 0;
  h1 {
    margin: 60px 0;
  }
  .why {
    display: grid;
    grid-template-columns: 350px 350px;
    justify-content: center;
    grid-gap: 70px;
    
      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        
        img {
          width: 10%;
          height: auto;
        }
      }  
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
  
`
export const Signup = styled.div`
  text-align: center;
  padding: 70px 0;
  background: #F2C94C;
  .signup-content {
    width: 60%;
    margin: 0 auto;
    text-align: center;
    
    @media (max-width: 768px) {
      width: 90%;
    }
    
    input {
      padding: 10px 20px;
      background: #F2C94C;
      border: 2px solid #fefefe;
      
      ::placeholder {
        color: #fefefe;
      }
    }
    
    button {
      background: #233533;
      border-color: #233533;
      padding: 10px 20px;
      color: #fefefe;
      margin-left: 15px;
    }
  }
  
  @media (max-width: 424px) {
    .sub {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
    }
    .sub > * {
      margin-bottom: 12px;
    }
    .sub button {
      margin-left: -1px;
    }
  }
  
`