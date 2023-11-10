import Card from '../UI/Card'

const Client = ({image, name, job, socials}) => {
  return (
    <Card className="client">
      <div className="client_img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="client_socials">
        {
          socials.map(({icon, link}, index) => { 
            return <a key={index} href={link} target='_blank' rel='noreffer noopener'>{icon}</a>
          })
        }
      </div>
    </Card>
  )
}

export default Client