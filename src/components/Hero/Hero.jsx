import './Hero.css'
import CountUp from 'react-countup';
import {HiLocationMarker} from 'react-icons/hi'
import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <section className="hero-wrapper">
        <div className="flexCenter hero-container paddings innerWidth">

            {/* left side */}
            <div className="flexColStart hero-left">
              <div className="hero-title">
                <div className="orange-circle">
                  
                </div>
                <motion.h1
                initial={ {y: "2rem", opacity: 0}}
                animate={{ y: 0, opacity: 1 }}
                transition ={{
                  duration: 4,
                  type: "spring"
                }}>Discover <br /> Most Suitable <br />Property</motion.h1>
              </div>
                
              <div className="flexColStart hero-des">  
                  <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
                  <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
              </div>

              <div className="search-bar flexCenter">
                < HiLocationMarker color="var(--blue)" size={25}/>
                <input type='text' />
                <button className="button">Search</button>
              </div>

              <div className="flexCenter stats">
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={7700} end={8000} duration={4} />
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Premium Products</span>
                </div>

              <div className="flexColStart stat">
                <span>
                  <CountUp start={930} end={1000} duration={4} />
                  <span>+</span>
                </span>
                  <span className='secondaryText'> Happy Customer</span>
              </div>

              <div className="flexColStart stat statLast">
                <span>
                  <CountUp  end={30} />
                  <span>+</span>
                </span>
                  <span className='secondaryText'>Award Winnings</span>
              </div>
              </div>


            </div>

            {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div
                initial={{ x: "7rem", opacity: 0}}
                animate={{ x: 0, opacity:1}}
                transition={{
                  duration: 4,
                  type: "spring"
                }}
                className="image-container">
                    <img src="./contact2.jpg" alt="real estate" />
                </motion.div>

            </div>
        </div>
    </section>
  )
}

export default Hero