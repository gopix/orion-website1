"use client"
import { useState } from "react"
import styles from "./Form.module.css"

export default function Form() {
  const [captchaChecked, setCaptchaChecked] = useState(false)

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!captchaChecked) {
      alert("Please confirm you are not a robot.")
      return
    }
    // handle form submission
  }

  return (
     <>
   <section className={styles.section}>

      {/* Left: heading + tagline */}
      <div className={styles.left}>
        <h2>Let&apos;s Get Started !!</h2>
        <p>
          Intelligent publishing systems to elevate<br />
          your business future, at your fingertips
        </p>
      </div>

      {/* Right: form card */}
      <div className={styles.formCard}>
        <h3>Get in Touch</h3>

        <form onSubmit={handleSubmit} noValidate>

          {/* Row 1 */}
          <div className={styles.grid2}>
            <div className={styles.field}>
              <input type="text" placeholder="Name*" required />
            </div>
            <div className={styles.field}>
              <input type="email" placeholder="Business Email*" required />
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.grid2}>
            <div className={styles.field}>
              <input type="text" placeholder="Role*" required />
            </div>
            <div className={styles.field}>
              <input type="tel" placeholder="Mobile*" required />
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles.grid2}>
            <div className={styles.field}>
              <input type="text" placeholder="Company Name*" required />
            </div>
            <div className={styles.field}>
              <select required defaultValue="">
                <option value="" disabled>Product / Services*</option>
                <option value="orion-submit">ORION SUBMIT+</option>
                <option value="orion-editor">ORION EDITOR+</option>
                <option value="orion-publish">ORION PUBLISH+</option>
                <option value="zoho-impl">Business Systems (Zoho)</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Row 4 */}
          <div className={styles.grid2}>
            <div className={styles.field}>
              <select required defaultValue="">
                <option value="" disabled>Annual Revenue*</option>
                <option value="lt-1cr">Below ₹1 Cr</option>
                <option value="1-5cr">₹1 Cr – ₹5 Cr</option>
                <option value="5-20cr">₹5 Cr – ₹20 Cr</option>
                <option value="gt-20cr">Above ₹20 Cr</option>
              </select>
            </div>
            <div className={styles.field}>
              <select required defaultValue="">
                <option value="" disabled>How did you hear about us?</option>
                <option value="linkedin">LinkedIn</option>
                <option value="google">Google Search</option>
                <option value="referral">Referral</option>
                <option value="event">Event / Conference</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Textarea */}
          <div className={styles.fullRow}>
            <div className={styles.field}>
              <textarea placeholder="Tell Us How We Can Help!*" required />
            </div>
          </div>

          {/* Fake reCAPTCHA */}
          <div className={styles.captchaRow}>
            <div className={styles.captchaBox}>
              <input
                type="checkbox"
                className={styles.captchaCheckbox}
                checked={captchaChecked}
                onChange={() => setCaptchaChecked(!captchaChecked)}
                id="captcha"
              />
              <label className={styles.captchaLabel} htmlFor="captcha">
                I&apos;m not a robot
              </label>
              <div className={styles.captchaBadge}>
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" stroke="#4A90D9" strokeWidth="4"/>
                  <path d="M20 32 C20 22 44 22 44 32 C44 42 20 42 20 32Z" fill="#4A90D9" opacity="0.15"/>
                  <path d="M32 18 L32 46 M18 32 L46 32" stroke="#4A90D9" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <span>reCAPTCHA</span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className={styles.submitRow}>
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </div>

        </form>
      </div>

    </section>

    </>
  )
}
