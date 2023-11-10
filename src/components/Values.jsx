import Image from '../images/fashion11.webp'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="values_left">
          <div className="values_image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values_right">
          <SectionHead icon={<GiCutDiamond/>} title="Values"/>
          <div className="values_wrapper">
            { 
            values.map(({id, icon, title, desc}) => { 
              return <Card key={id} className="values_value">
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{desc}</small>
              </Card>
            })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values