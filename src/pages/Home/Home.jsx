import './Home.css'

export default function Home() {

  return (
    <section className="viewport">
      <section className="main-product">
        <img src="/placeholder.jpg" alt="placeholder.jpg" className='main-image'/>
        <h1 id='main-title'>Explore Our Artisan Handmade Crafts!</h1>

      </section>
      <section className="carousel">
        <img className='placeholder' src="/placeholder.jpg" alt="placeholder.jpg" />
        <img className='placeholder' src="/placeholder.jpg" alt="placeholder.jpg" />
        <img className='placeholder' src="/placeholder.jpg" alt="placeholder.jpg" />
        <img className='placeholder' src="/placeholder.jpg" alt="placeholder.jpg" />
        <img className='placeholder' src="/placeholder.jpg" alt="placeholder.jpg" />
        <img className='placeholder' src="/placeholder.jpg" alt="placeholder.jpg" />
        <img className='placeholder' src="/placeholder.jpg" alt="placeholder.jpg" />
      </section>
    </section>
  )
}