import Header from '../../components/Header'
import HeaderImage from '../../images/fashion9.jpg'
import { clients } from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Client from '../../components/Client'
import './clients.css'

const Clients = () => {
  return (
    <>
     <Header title="Our Potential Clients" image={HeaderImage}>
      Meet our potential clients
      </Header> 
      <section className='clients'>
        <div className="container clients_container">
          {
            clients.map(({id, image, name,job, socials }) => { 
              return <Client key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/>, link: socials[0]},
                  {icon: <AiOutlineTwitter/>, link: socials[1]},
                  {icon: <FaFacebookF/>, link: socials[2]},
                  {icon: <FaLinkedin/>, link: socials[3]}
                ]
              } />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Clients