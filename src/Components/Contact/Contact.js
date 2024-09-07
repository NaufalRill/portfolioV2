import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
          <section id="contact">
    <div class="contact main-container">
      <div class="contact-left">
        <form class="contact-form" action="https://formspree.io/f/mwpezebg" method="POST">
          <div>
            <input type="text" placeholder="Name" name="name"/>
          </div>

          <div>
            <input type="text" placeholder="Email" name="email"/>
          </div>

          <div>
            <textarea name="message" id="message" placeholder="Messages" cols="30" rows="10"></textarea>
          </div>

          <button class="btn-submit">Send Messages</button>
        </form>
      </div>

      <div class="contact-right">
        {/*Education 2*/}
        <div class="contact-item">
          <div class="contact-item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" />
            </svg>
          </div>

          <div class="contact-item-detail">
            <h4>Address</h4>
            <p>Kabupaten Malang, Jawa Timur, Indonesia</p>
          </div>
        </div>

        {/*Education 2*/}
        <div class="contact-item">
          <div class="contact-item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
            </svg>
          </div>

          <div class="contact-item-detail">
            <h4>Phone Number</h4>
            <p>0812 5019 9962</p>
          </div>
        </div>

        {/*Education 2*/}
        <div class="contact-item">
          <div class="contact-item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
          </div>

          <div class="contact-item-detail">
            <h4>Email</h4>
            <p>naufalghifari1139@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  </section>
    </div>
  )
}

export default Contact