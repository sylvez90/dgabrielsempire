import Header from '../../components/Header'
import HeaderImage from '../../images/fashion9.jpg'
import StoryImage from '../../images/fashion4.jpg'
import VisionImage from '../../images/fashion3.jpg'
import MissionImage from '../../images/fashion10.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}> <h3><b>D'Gabriel Fashion Empire</b></h3> connects with her customers  to deliver  quality and unique fashion designs that they can rely and lure on.
    </Header>

    <section className='about_story'>
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>Over the years, <b>D'Gabriel Fashion Empire</b> became a part of the fashion company in Nigeria. In term of over a decade, our company has developed rapidly and at the current moment employs more  employees.</p>
          <p><b>D'Gabriel Fashion Empire</b> is an integrated fashion company with the comprehensive capability to design and sew readymade garments with high quality for the Global Market, with a very competitive price.

Our company can produce various kinds of garment, in various styles, across different categories which includes –  apparels for  Women , Kids and Babywear with capacity to sew massively</p>
<p>We slowly built our reputation & started getting more business. Various local brands vested their design and have received satisfactory creative and economically viable results.</p>
        </div>
      </div>
    </section>

    <section className='about_vision'>
      <div className="container about_vision-container">
        <div className="about_section-content">
          <h1>Our Vision</h1>
          <p>We strive to be a global leader in fashion-knit and fashion outerwear by empowering innovation and design to provide total customer satisfaction.</p>
          <p>We strive to be a caring and well-managed organization for our business partners ,customers and employees, and a responsible corporate citizen to our society.</p>
        </div>
        <div className="about_section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className='about_mission'>
      <div className="container about_mission-container">
        <div className="about_section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about_section-content">
          <h1>Our Mission</h1>
          <p>To innovate, to lead, to enhance, to provide best-value products and services to global customers.</p>

        <p>To make a difference through our branding to stay ahead of fashion trends, market changes and the latest technology.</p>

        <p>To enhance the quality of life for our business partners,customers and employees.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About