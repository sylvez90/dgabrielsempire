import {Link} from 'react-router-dom'
import Image from '../images/fb8.jpg'


const MainHeader = () => {
  return (
    <header className='main_header'>
      <div className="container main_header-container">
        <div className="main_header-left">
          <h1>D'Gabriel Fashion Empire</h1>
          <p>Home of Classic Fashion and Beauty</p>
          <Link to="/contact" className='btn lg'>Contact Us</Link>
        </div>
        
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader