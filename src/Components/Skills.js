import meter1 from "../assets/img/nextjs-removebg-preview.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp&w=256' alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src='https://img.icons8.com/fluent/512/css3.png' alt="Image" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src='https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png' alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt="Image" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>NextJs</h5>
                            </div><div className="item">
                                <img src='https://cdn.worldvectorlogo.com/logos/react-native-1.svg' alt="Image" />
                                <h5>React Native</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
?    </section>
  )
}