import Link from "next/link";

const services = [
  ["Dental Implants", "Natural-looking, durable tooth replacement with implant-focused care."],
  ["Root Canal Treatment", "Comfort-focused treatment to save infected or damaged teeth."],
  ["Tooth Extraction", "Safe and careful extraction when a tooth cannot be preserved."],
  ["Teeth Whitening", "Professional whitening care for a brighter, confident smile."],
  ["Braces & Aligners", "Orthodontic options for straighter, healthier-looking smiles."],
  ["Child Dental Treatment", "Gentle dental care designed with children and parents in mind."],
  ["Cosmetic & Aesthetic Dentistry", "Smile-focused treatments tailored to your goals."],
];

const doctors = [
  "Dr. Heena A Ansari",
  "Dr. Ayesha A Ansari",
  "Dr. Zainab S Shaikh",
  "Dr. Huzaifa S Shaikh",
  "Dr. Sana A Shaikh",
  "Dr. Shweta N Patil",
  "Dr. Liza F Khan",
  "Dr. Maaz F Khan",
  "Dr. Tina S Nikam",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <Link href="/" className="brand">
            <img src="/images/logo.jpeg" alt="Arfat Dental Center logo" />
          </Link>
          <nav>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="/appointment">Book Appointment</a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">ARFAT DENTAL CENTER · BHIWANDI</span>
            <h1>Healthy Smiles.<br /><em>Expert Care.</em><br />Trusted Dentistry.</h1>
            <p>
              Comprehensive dental care for you and your family, with a special focus
              on implants, braces and comfortable patient care.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/appointment">Book an Appointment</a>
              <a className="button secondary" href="tel:+919552786566">Call 9552786566</a>
            </div>
            <div className="hero-note">Mon–Sat · 11 AM–3 PM & 6 PM–10 PM · Sunday closed</div>
          </div>
          <div className="doctor-hero">
            <div className="doctor-glow" />
            <img src="/images/naushad.jpeg" alt="Dr. Naushad Ansari Mohd Saleem" />
            <div className="doctor-card">
              <strong>Dr. Naushad Ansari Mohd Saleem</strong>
              <span>B.D.S., P.G.A.D. (USA)</span>
              <small>Implant & Braces Specialist</small>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><b>B.D.S., P.G.A.D. (USA)</b><span>Lead Doctor</span></div>
          <div><b>Implants & Braces</b><span>Specialist Care</span></div>
          <div><b>7 Core Services</b><span>Comprehensive Dentistry</span></div>
          <div><b>Easy Booking</b><span>15-minute appointment slots</span></div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">ABOUT THE CENTER</span>
            <h2>Modern dental care with a personal touch.</h2>
          </div>
          <div>
            <p className="lead">
              Arfat Dental Center is a dental clinic in Bhiwandi providing a range of
              preventive, restorative, orthodontic, implant and cosmetic dental services.
            </p>
            <p>
              Our team includes experienced B.D.S. dentists, led by Dr. Naushad Ansari
              Mohd Saleem. Patients can book online, choose a convenient time and pay at
              the clinic.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR SERVICES</span>
            <h2>Care for every smile.</h2>
          </div>
          <div className="service-grid">
            {services.map(([title, desc], i) => (
              <article className="service-card" key={title}>
                <span className="service-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href="/appointment">Book treatment →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR DENTAL TEAM</span>
            <h2>Meet your dental care team.</h2>
          </div>
          <div className="lead-doctor">
            <img src="/images/naushad.jpeg" alt="Dr. Naushad Ansari Mohd Saleem" />
            <div>
              <span className="eyebrow">LEAD DOCTOR</span>
              <h3>Dr. Naushad Ansari Mohd Saleem</h3>
              <p className="qualification">B.D.S., P.G.A.D. (USA)</p>
              <p>Certified in Implants · Certified in Orthodontics (Braces)</p>
              <strong>Implant & Braces Specialist</strong>
            </div>
          </div>
          <div className="team-grid">
            {doctors.map((doctor) => (
              <div className="team-card" key={doctor}>
                <div className="avatar">{doctor.replace("Dr. ", "").split(" ").map(x => x[0]).slice(0,2).join("")}</div>
                <div><strong>{doctor}</strong><span>B.D.S.</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-banner">
        <div className="container booking-inner">
          <div>
            <span className="eyebrow">ONLINE APPOINTMENTS</span>
            <h2>Choose a time that works for you.</h2>
            <p>15-minute slots · Monday to Saturday · Pay at the clinic</p>
          </div>
          <a className="button light" href="/appointment">Book Appointment</a>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">VISIT ARFAT DENTAL CENTER</span>
            <h2>We’re here for your smile.</h2>
            <p>
              1st & 2nd Floor, Shalimar Tower, above Haji Motors, next to
              Bahar-e-Madina Masjid, Vanjar Patti Naka, Gokul Nagar, Bhiwandi,
              Maharashtra 421302
            </p>
            <div className="contact-actions">
              <a className="button primary" href="https://maps.app.goo.gl/JynrUdbbmGJSWtyH9" target="_blank">Open Google Maps</a>
              <a className="button secondary" href="https://wa.me/919552786566?text=Hello%20Arfat%20Dental%20Center%2C%20I%20would%20like%20to%20book%20an%20appointment.">WhatsApp</a>
            </div>
          </div>
          <div className="hours-card">
            <h3>Opening hours</h3>
            <div><span>Monday – Saturday</span><b>11 AM–3 PM<br />6 PM–10 PM</b></div>
            <div><span>Sunday</span><b>Closed</b></div>
            <hr />
            <a href="tel:+919552786566">9552786566</a>
            <a href="mailto:naushad.bds@gmail.com">naushad.bds@gmail.com</a>
            <a href="https://www.instagram.com/arfatdentalcenter/" target="_blank">@ARFATDENTALCENTER · Instagram</a>
            <a href="https://www.facebook.com/share/1KB38roeDY/" target="_blank">Facebook</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div><img src="/images/logo.jpeg" alt="Arfat Dental Center" /><span>© 2026 Arfat Dental Center. All rights reserved.</span></div>
          <a href="/admin">Admin</a>
        </div>
      </footer>
    </main>
  );
}
