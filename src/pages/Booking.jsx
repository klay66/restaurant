import { useState } from "react";
import styles from "./Booking.module.css";

const times = [
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
];

const guestOptions = Array.from({ length: 10 }, (_, index) => `${index + 1} Person${index === 0 ? "" : "s"}`);

const restaurantLocation = {
  name: "Bistro Bliss",
  address: "123 Flavor Street, Cairo",
  coords: { lat: 30.0444, lng: 31.2357 },
};

export default function BookingPage() {
  const [form, setForm] = useState({
    date: "",
    time: "06:00 PM",
    guests: "2 Persons",
    name: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target }) => {
    setForm((current) => ({ ...current, [target.name]: target.value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const mapSrc = `https://maps.google.com/maps?q=${restaurantLocation.coords.lat},${restaurantLocation.coords.lng}&z=15&output=embed`;

  return (
    <main className={styles.bookingPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.tag}>Book A Table</span>
          <h1>Reserve your place for a delicious evening.</h1>
          <p>
            Choose your date, time and number of guests. Our cozy restaurant is ready to welcome you with fresh flavors and warm hospitality.
          </p>
        </div>
      </section>

      <section className={styles.bookingSection}>
        <div className={styles.container}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h2>Reservation Details</h2>
              <p>All fields are optional except name and phone.</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label>
                Date
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Time
                <select name="time" value={form.time} onChange={handleChange}>
                  {times.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Total Guests
                <select name="guests" value={form.guests} onChange={handleChange}>
                  {guestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="01012345678"
                  required
                />
              </label>

              <label>
                Special Requests
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Add a note (optional)"
                  rows="3"
                />
              </label>

              <button type="submit" className={styles.submitButton}>
                Confirm Reservation
              </button>
            </form>

            {submitted && (
              <div className={styles.confirmation}>
                <h3>Reservation confirmed</h3>
                <p>
                  Thanks, <strong>{form.name || "Guest"}</strong>. We saved your reservation for <strong>{form.guests}</strong> on <strong>{form.date || "the selected date"}</strong> at <strong>{form.time}</strong>.
                </p>
                <p>We will contact you at <strong>{form.phone}</strong> if we need to confirm anything else.</p>
              </div>
            )}
          </div>

          <aside className={styles.mapCard}>
            <div className={styles.mapIntro}>
              <span>Location</span>
              <h2>{restaurantLocation.name}</h2>
              <p>{restaurantLocation.address}</p>
            </div>
            <div className={styles.mapWrapper}>
              <iframe
                title="Restaurant location map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className={styles.locationMeta}>
              <div>
                <h3>Opening Hours</h3>
                <p>Mon - Sun: 12:00 PM – 11:00 PM</p>
              </div>
              <div>
                <h3>Need help?</h3>
                <p>Call us at <strong>0102 345 6789</strong></p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
