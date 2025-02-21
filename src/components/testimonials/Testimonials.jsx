import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id="testimonials">Testimonials
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <div className='container testimonials__container'></div>
    <article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVTR1} alt="Avatar one"></img>
    </div>
    <h5 className='client__name'>Ernest Achiever</h5>
      <small className='clent__review'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quod doloribus non exercitationem ab nobis voluptates labore, saepe aperiam quae, fugit rem mollitia sint consequatur unde quam repellat corporis odit est commodi aspernatur! Qui, quibusdam.
      </small>
    </article>
    <article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVTR1} alt="Avatar one"></img>
    </div>
    <h5 className='client__name'>Ernest Achiever</h5>
      <small className='clent__review'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quod doloribus non exercitationem ab nobis voluptates labore, saepe aperiam quae, fugit rem mollitia sint consequatur unde quam repellat corporis odit est commodi aspernatur! Qui, quibusdam.
      </small>
    </article>
    <article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVTR1} alt="Avatar one"></img>
    </div>
    <h5 className='client__name'>Ernest Achiever</h5>
      <small className='clent__review'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quod doloribus non exercitationem ab nobis voluptates labore, saepe aperiam quae, fugit rem mollitia sint consequatur unde quam repellat corporis odit est commodi aspernatur! Qui, quibusdam.
      </small>
    </article>
    </section>
  )
}

export default Testimonials