import React, { useEffect, useState, useRef } from 'react'
import './style.css'
import './queries.css'
import { motion, useMotionValue, useMotionValueEvent, MotionConfig, px, color } from "motion/react"
import LogoTradeInSmall from '../../assets/logos/iphone-tradein/logo_iphone_tradein__small.png'
import LogoCardSmall from '../../assets/logos/apple-card/logo_small.png'
import BadMonkey from '../../assets/carousel-tv-plus/heroes/bad-monkey/548x1186.jpg'
import Silo from '../../assets/carousel-tv-plus/heroes/silo/548x1186.jpg'
import SlowHorses from '../../assets/carousel-tv-plus/heroes/slow-horses/548x1186.jpg'
import TedLasso from '../../assets/carousel-tv-plus/heroes/ted-lasso/548x1186.jpg'
import Wolfs from '../../assets/carousel-tv-plus/heroes/wolfs/548x1186.jpg'
import BadMonkeyLarge from '../../assets/carousel-tv-plus/heroes/bad-monkey-large/1378x774.jpg'
import SiloLarge from '../../assets/carousel-tv-plus/heroes/silo-large/1378x774.jpg'
import SlowHorsesLarge from '../../assets/carousel-tv-plus/heroes/slow-horses-large/1378x774.jpg'
import TedLassoLarge from '../../assets/carousel-tv-plus/heroes/ted-lasso-large/1378x774.jpg'
import WolfsLarge from '../../assets/carousel-tv-plus/heroes/wolfs-large/1378x774.jpg'
import LogoBadMonkey from '../../assets/carousel-tv-plus/logos/bad-monkey/1096x164.png'
import LogoSilo from '../../assets/carousel-tv-plus/logos/silo/1096x194.png'
import LogoSlowHorses from '../../assets/carousel-tv-plus/logos/slow-horses/1096x232.png'
import LogoTedLasso from '../../assets/carousel-tv-plus/logos/ted-lasso/1096x164.png'
import LogoWolfs from '../../assets/carousel-tv-plus/logos/wolfs/1096x432.png'
import LogoTvPlus from '../../assets/logos/tv-plus/hero-logo-theme-dark_small.png'

import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

const images = [BadMonkey, Silo, Wolfs, TedLasso, SlowHorses]
const imagesLarge = [BadMonkeyLarge, SiloLarge, WolfsLarge, TedLassoLarge, SlowHorsesLarge]
const logosSmall = [LogoBadMonkey, LogoSilo, LogoWolfs, LogoTedLasso, LogoSlowHorses]
const logoTvPlus = [LogoTvPlus, LogoTvPlus, LogoTvPlus, LogoTvPlus, LogoTvPlus]
const textBottomGenre = [
  { genre: 'Comedy', descrip: 'The shady side of paradise.' },
  { genre: 'Sci-Fi', descrip: 'The truth will surface.' },
  { genre: 'Action', descrip: 'Rival fixers stuck on the same jog for one wild night.' },
  { genre: 'Comedy', descrip: 'Kidness makes a comeback' },
  { genre: 'Thriller', descrip: 'Emmy Award winner.' },
]

const imagesWithLoop = [
  ...images,
  images[0]
]

const imagesLargeWithLoop = [
  ...imagesLarge,
  imagesLarge[0],
]
function App() {

  const [current, setCurrent] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const dragX = useMotionValue(0)
  const dragXProgress = useMotionValue(0)

  const widthScreenSize = useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const responsiveImages = width > 740 ? imagesLargeWithLoop : imagesWithLoop

  const onPrevClick = () => {
    setCurrent((prev) => (prev === 0 ? responsiveImages.length - 2 : prev - 1))
  }

  const onNextClick = () => {
    setCurrent((prev) => (prev === responsiveImages.length - 1 ? 0 : prev + 1))
  }

  const lastImage = useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number") {
      dragXProgress.set(latest)
    }
  });

  const loop = useEffect(() => {
    let timer = 0
    if (current === 0) {
      timer = setTimeout(() => {
        setIsTransitioning(false)
        setCurrent(responsiveImages.length - 1)
      }, 3000)
    }
    if (current === responsiveImages.length - 1) {
      timer = setTimeout(() => {
        setIsTransitioning(false)
        setCurrent(1)
      }, 1)
    } else {
      timer = setTimeout(() => setIsTransitioning(false), 3000)
    }
    return () => clearTimeout(timer);
  }, [current, responsiveImages])


  return (
    <>
      <header>
        <nav className='global-nav'>
          <ul className='global-nav-itens'>
            <li>
              <a href="#" className='apple-icon'>
                <span className="globalnav-image-regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="48" fill="white" className="bi bi-apple" viewBox="0 0 17 48">
                    <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
                  </svg>
                </span>
                <span className="globalnav-image-compact">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="48"
                    fill="white"
                    className="bi bi-apple" viewBox="0 0 17 48">
                    <path d="m 15.5752 19.0792 a 4.2055 4.2055 0 0 0 -2.01 3.5376 a 4.0931 4.0931 0 0 0 2.4908 3.7542 a 9.7779 9.7779 0 0 1 -1.2755 2.6351 c -0.7941 1.1431 -1.6244 2.2862 -2.8878 2.2862 s -1.5883 -0.734 -3.0443 -0.734 c -1.42 0 -1.9252 0.7581 -3.08 0.7581 s -1.9611 -1.0589 -2.8876 -2.3584 a 11.3987 11.3987 0 0 1 -1.9373 -6.1487 c 0 -3.61 2.3464 -5.523 4.6566 -5.523 c 1.2274 0 2.25 0.8062 3.02 0.8062 c 0.734 0 1.8771 -0.8543 3.2729 -0.8543 a 4.3778 4.3778 0 0 1 3.6822 1.841 Z m -6.8586 -2.0456 a 1.3865 1.3865 0 0 1 -0.2527 -0.024 a 1.6557 1.6557 0 0 1 -0.0361 -0.337 a 4.0341 4.0341 0 0 1 1.0228 -2.5148 a 4.1571 4.1571 0 0 1 2.7314 -1.4078 a 1.7815 1.7815 0 0 1 0.0361 0.373 a 4.1487 4.1487 0 0 1 -0.9867 2.587 a 3.6039 3.6039 0 0 1 -2.5148 1.3236 Z" />
                  </svg>
                </span>
              </a>
            </li>
            <li className="nav-links">
              <li className="nav"><a href="#" className='store'>Store</a></li>
              <li className="nav"><a href="#" className='mac'>Mac</a></li>
              <li className="nav"><a href="#" className='ipad'>iPad</a></li>
              <li className="nav"><a href="#" className='iphone'>iPhone</a></li>
              <li className="nav"><a href="#" className='watch'>Watch</a></li>
              <li className="nav"><a href="#" className='vision'>Vision</a></li>
              <li className="nav"><a href="#" className='airpods'>AirPods</a></li>
              <li className="nav"><a href="#" className='tvHome'>TV & Home</a></li>
              <li className="nav"><a href="#" className='entertainment'>Entertainment</a></li>
              <li className="nav"><a href="#" className='acessories'>Acessories</a></li>
              <li className="nav"><a href="#" className='support'>Support</a></li>
            </li>
            <a role="button" href="#" className="button-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </a>
            <a role="button" href="#" className="button-bag">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="48" fill="white" class="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </a>
            <li>
              <a role="button" href="#" className="button-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="18" fill="white" class="bi bi-list" viewBox="0 0 24 10">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="iphone-16-pro">
        <div className="module-content-iphone16pro">
          <div className="wrapper-iphone-16-pro">
            <a href="#">
              <figure className="image-iphone-16-pro">
                <figcaption>Iphone 16 Pro Image</figcaption>
              </figure>
            </a>
            <div className="text-iphone-16-pro">
              <h1>iPhone 16 Pro</h1>
              <p>Hello, Apple Intelligence.</p>
            </div>
            <div className="button-iphone-16-pro">
              <button className="button-learn">Learn more</button>
              <button className="button-buy">Buy</button>
            </div>
          </div>
        </div>
      </div>
      <div className="iphone-16">
        <div className="module-content-iphone16">
          <div className="wrapper-iphone-16">
            <a href="#">
              <figure className="image-iphone-16">
                <figcaption>Iphone 16 Image</figcaption>
              </figure>
            </a>
            <div className="text-iphone-16">
              <h1>iPhone 16</h1>
              <p>Hello, Apple Intelligence.</p>
            </div>
            <div className="button-iphone-16">
              <button className="button-learn">Learn more</button>
              <button className="button-buy">Buy</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tv-plus-disclaimer">
        <div className="module-content-tv-plus-disclaimer">
          <div className="wrapper-tv-plus-disclaimer">
            <a href="#">
              <figure className="image-tv-plus-disclaimer">
                <figcaption>Disclaimer Small Image</figcaption>
              </figure>
            </a>
            <div className="info-top">
              <figure className="tv-plus-icon">
                <figcaption>Apple Tv Plus Logo</figcaption>
              </figure>
              <figure className="logo-disc">
                <figcaption>Apple Tv Plus Logo</figcaption>
              </figure>
            </div>
            <div className="info-bottom">
              <button className="button-stream-now">Stream now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="macbook-pro">
        <div className="module-content-macbook-pro">
          <div className="wrapper-macbook-pro">
            <a href="#">
              <figure className="image-macbook-pro">
                <figcaption>MacBook Pro Image</figcaption>
              </figure>
            </a>
            <div className="unit-text-top">
              <h1>MacBook Pro</h1>
              <p>A work of smart.</p>
            </div>
            <div className="unit-button-top">
              <button className="button-learn">Learn more</button>
              <button className="button-buy">Buy</button>
            </div>
            <div className="unit-text-bottom">
              <p>Hello, Apple Intelligence.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mac-mini">
        <div className="module-content-mac-mini">
          <div className="wrapper-mac-mini">
            <a href="#">
              <figure className="image-mac-mini">
                <figcaption>Mac mini Image</figcaption>
              </figure>
            </a>
            <div className="unit-text-top-mac-mini">
              <h1>Mac mini</h1>
              <p>Size down. Power up.</p>
            </div>
            <div className="unit-button-top-mac-mini">
              <button className="button-learn">Learn more</button>
              <button className="button-buy">Buy</button>
            </div>
            <div className="unit-text-bottom">
              <p>Hello, Apple Intelligence.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mac-imac">
        <div className="module-content-imac">
          <div className="wrapper-imac">
            <a href="#">
              <figure className="image-imac">
                <figcaption>iMac Image</figcaption>
              </figure>
            </a>
            <div className="unit-text-top-imac">
              <h1>iMac</h1>
              <p>Bri
                <span className='c1'>l</span>
                <span className='c2'>l</span>
                <span className='c3'>l</span>
                <span className='c4'>l</span>
                <span className='c5'>l</span>
                <span className='c6'>l</span>
                iant.</p>
            </div>
            <div className="unit-button-top-imac">
              <button className="button-learn">Learn more</button>
              <button className="button-buy">Buy</button>
            </div>
            <div className="unit-text-bottom">
              <p>Hello, Apple Intelligence.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="apple-intelligence">
        <div className="module-content-ai">
          <div className="wrapper-ai">
            <a href="#">
              <figure className="image-ai">
                <figcaption>AI Image</figcaption>
              </figure>
            </a>
            <div className="unit-text-top-ai">
              <h1>Apple Intelligence</h1>
              <p>AI for the rest of us.</p>
            </div>
            <div className="unit-button-top-ai">
              <button className="button-learn">Learn more</button>
              <button className="button-watch">Watch the film</button>
            </div>
          </div>
        </div>
      </div>
      <div className="trade-in">
        <div className="module-content-tradein">
          <div className="wrapper-tradein">
            <a href="#">
              <figure className="image-tradein">
                <figcaption>Trade in Image</figcaption>
              </figure>
            </a>
            <div className="unit-text-top-tradein">
              <a href="#">
                <figure>
                  <img className="logo-trade-in" src={LogoTradeInSmall} alt="Logo Trade In" />
                </figure>
              </a>
              <p>Get $180-$650 in credit when you trade in iPhone 12 or higher.</p>
            </div>
            <div className="unit-button-top-tradein">
              <button className="button-get">Get your estimate</button>
            </div>
          </div>
        </div>
      </div>
      <div className="apple-card" style={{ border: 'none' }}>
        <div className="module-content-card">
          <div className="wrapper-card">
            <a href="#">
              <figure className="image-card">
                <figcaption>Card Image</figcaption>
              </figure>
            </a>
            <div className="unit-text-top-card">
              <a href="#">
                <figure>
                  <img className="logo-card" src={LogoCardSmall} alt="Logo Card" />
                </figure>
              </a>
              <p>Get up to 3% Daily Cash back with every purchase.</p>
            </div>
            <div className="unit-button-top-card">
              <button className="button-learn">Learn more</button>
              <button className="button-apply">Apply now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-tv-plus">
        <div className="module-content-carousel">
          <div className="wrapper-carousel">
            <MotionConfig transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}>
              <div className="carousel-inner">
                <motion.div className="images" animate={{ x: `calc(-${current} * 100%)` }}>
                  {responsiveImages.map((image, idx) => (
                    <motion.img
                      key={idx}
                      src={image}
                      alt="images"
                      animate={{ opacity: idx === current ? 1 : 0.3 }}
                      className='img' />
                  ))}
                </motion.div>
                <div className="logo-plus">
                  <motion.div className="logos-tv-plus" animate={{ x: `calc(-${current} * 376px)` }}>
                    {logosSmall.map((logo, idx) => (
                      <motion.img
                        key={idx}
                        src={logo}
                        alt="logos"
                        animate={{ opacity: idx === current ? 1 : 0.3 }}
                        className='logo' />
                    ))}
                  </motion.div>
                </div>
                <div className="logo-tv-apple">
                  <motion.div className="logo-tv-plus-apple" animate={{ x: `calc(-${current} * 100%)` }}>
                    {logoTvPlus.map((logo, idx) => (
                      <motion.img
                        key={idx}
                        src={logo}
                        alt="logos"
                        animate={{ opacity: idx === current ? 1 : 0.3 }}
                        className="logo-tv-icon" />
                    ))}
                  </motion.div>
                </div>
                <div className="text-bottom-tv-plus">
                  <motion.div className="tx-genre-bottom" animate={{ x: `calc(-${current} * 100%)` }}>
                    {textBottomGenre.map((genre, idx) => (
                      <motion.div
                        key={idx}
                        className={`genreDescrip ${current === idx ? 'active' : ''}`}>
                        <p className="genre">{genre.genre}</p>
                        <p className="descrip">{genre.descrip}</p>
                        <button className="button-tv-plus">Stream now</button>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <div className="prev-next-button">
                  <button onClick={onPrevClick} className="button-carousel">
                    <FaChevronLeft />
                  </button>
                  <button onClick={onNextClick} className="button-carousel">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
              <div className="indicator-carousel">
                <div className="indicator">
                  {images.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrent(idx + 1)}>
                      <div className={`dot transition-colors ${idx === current ? 'bg-black' : 'bg-black-20'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </MotionConfig>
          </div>
        </div>
      </div>
      <footer>
        <div className="rulesAndConditions">
          <p>
            1. Hearing Aid and Hearing Test: The Hearing Aid feature has received FDA authorization. The Hearing Test and Hearing Aid features are supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are intended for people 18 years old or older. The Hearing Aid feature is also supported on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived mild to moderate hearing loss.
            <br /><br />
            Hearing Protection: The Hearing Protection feature works with AirPods Pro 2 with the latest firmware when paired with a compatible iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. Feature is only available in the U.S. and Canada. See support.apple.com/120850 for total attenuation and more information. The Hearing Protection feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or jackhammers, or against sustained sounds louder than 110 dBA.
            <br /><br />
            2. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
            <br /><br />
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
            <br /><br />
            If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
            Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
            <br /><br />
            Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to U.S. English, as part of an iOS 18, iPadOS 18, and macOS Sequoia update. English (Australia, Canada, Ireland, New Zealand, South Africa, UK) language support available this December. Some features, additional platforms, and support for additional languages, like Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese, Spanish, Vietnamese, and others, will be coming over the course of the next year.
            <br /> <br />
            A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.
            <br /><br />
            Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
          </p>
          <hr />

          <p className="myInformations"> Project created for learning purposes.
            <br />
            <a href={'www.linkedin.com/in/marianabelo26'} className="myInformationsLink">My Linkedin: Mariana Belo</a>
          </p>
        </div>
      </footer>

    </>
  )
}

export default App
