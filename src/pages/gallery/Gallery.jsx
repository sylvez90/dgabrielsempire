import Header from '../../components/Header'
import HeaderImage from '../../images/fb8.jpg'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 61;
  const images = []

  for(let i = 1; i <= galleryLength; i++) { 
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
     <Header title="Our Gallery" image={HeaderImage}>
      Take a glance at our classic designs.
      </Header> 
      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image, index) => { 
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery