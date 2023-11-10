import Header from '../../components/Header'
import HeaderImage from '../../images/fashion7.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Choose your contact option to reach us. We are available 24/7 and we deliver nationwide.
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:sylvester.maduakor@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="https://m.me/sylvester.maduakor" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+2349051620620" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact