import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Animated } from 'react-animated-css'

import why1 from '../../assets/img/why1.svg'
import why2 from '../../assets/img/why2.png'
import why3 from '../../assets/img/why3.svg'
import why4 from '../../assets/img/why4.png'
import phone from '../../assets/img/phone.svg'
import heroMap from '../../assets/img/hero-map.svg'

import {
  Hero,
  Flow,
  Step,
  WhyContainer,
  Signup
} from './Home.styles'

const Home = () => {
  let location = useLocation()

  useEffect(() => {
    if (window.innerWidth <= 767) {
      const openMenu = document.getElementById('open-menu')
      const hideMenu = document.getElementById('hide-menu')
      const sidebar = document.getElementById('sidebar')

      openMenu.style.display = 'block'
      hideMenu.style.display = 'none'
      sidebar.style.width = '0'
    }
  }, [location])

  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <Hero className="app-mx">
        <div>
          <h1>Compare & book <br/> ride-hailing providers </h1>
          <p>
            Save money and time with WhichrRide. <br/>
            Think Compare the market but for taxis.
          </p>
        </div>
        <img src={heroMap} alt="" />
      </Hero>
      <Flow>
        <div className="flow-text">
          <h1>Whichride brings together multiple ride hailing providers and local taxi firms in one app</h1>
          <p>
            Allowing riders to select the provider that offers the best price,
            service or travel time, then seamlessly book within the app
          </p>
        </div>
        <div className="flow-details">
          <img src={phone} alt="" />
          <div>
            <div className="steps">
              <Step color="#F2C94C">Step 1</Step>
              <div>
                <h2>Enter location</h2>
                <p>Enter your destination to see a list of taxi providers near you.</p>
              </div>
            </div>
            <div className="steps">
              <Step color="#F2F2F2">Step 2</Step>
              <div>
                <h2>Find the perfect ride</h2>
                <p>
                  Filter results by driver rating, driver sex, waiting times, price or speed.
                  Reduce carbon footprint by only showing hybrid or electric cars.
                </p>
              </div>
            </div>
            <div className="steps">
              <Step color="#F2F2F2">Step 3</Step>
              <div>
                <h2>Pay and Save</h2>
                <p>
                  Once you select a ride, we search the web for coupons to get you an even better deal,
                  then book seemlessly within our app and earn points while you ride.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Flow>
      <WhyContainer>
        <h1 className="text-center">Why Whichride</h1>
        <div className="why">
          <div className="why-left">
            <div>
              <img src={why1} alt="why whichride"/>
              <h3>More Choices</h3>
              <p>
                WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.
              </p>
            </div>
            <div>
              <img src={why3} alt="why whichride"/>
              <h3>More Choices</h3>
              <p>
                WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.
              </p>
            </div>
          </div>
          <div className="why-right">
            <div>
              <img src={why2} alt="why whichride"/>
              <h3>More Choices</h3>
              <p>
                WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.
              </p>
            </div>
            <div>
              <img src={why4} alt="why whichride"/>
              <h3>Safety first</h3>
              <p>
                WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.
              </p>
            </div>
          </div>
        </div>
      </WhyContainer>
      <Signup>
        <div className="signup-content">
          <h1>Sign up to our beta form</h1>
          <p>
            Sign up to our mailing list to find out more information <br/> and keep up to date about our activities
          </p>
          <div className="sub">
            <input placeholder="email"/>
            <button>Subscribe</button>
          </div>
        </div>
      </Signup>

    </Animated>

  )
}

export default Home