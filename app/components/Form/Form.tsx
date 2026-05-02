"use client"
import { useState, useRef } from "react"
import styles from "./Form.module.css"
import { db } from "@/firebase/clientApp"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import ReCAPTCHA from "react-google-recaptcha"

type FormData = {
    name: string
    email: string
    role: string
    mobile: string
    company: string
    product: string
    revenue: string
    source: string
    message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {}

    if (!data.name.trim()) {
        errors.name = "Name is required."
    } else if (!/^[a-zA-Z\s'-]{2,}$/.test(data.name.trim())) {
        errors.name = "Enter a valid name."
    }

    if (!data.email.trim()) {
        errors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
        errors.email = "Enter a valid business email."
    }

    if (!data.role.trim()) {
        errors.role = "Role is required."
    }

    const cleanMobile = data.mobile.replace(/[\s\-().+]/g, "")
    if (!data.mobile.trim()) {
        errors.mobile = "Mobile number is required."
    } else if (!/^\+?[\d\s\-().]{7,20}$/.test(data.mobile.trim())) {
        errors.mobile = "Enter a valid mobile number."
    } else if (cleanMobile.length < 7 || cleanMobile.length > 15) {
        errors.mobile = "Mobile number must be between 7 and 15 digits."
    }

    if (!data.company.trim()) {
        errors.company = "Company name is required."
    }

    if (!data.product) errors.product = "Please select a product or service."
    if (!data.revenue) errors.revenue = "Please select your annual revenue."
    if (!data.source)  errors.source  = "Please tell us how you heard about us."

    if (!data.message.trim()) {
        errors.message = "Please tell us how we can help."
    } else if (data.message.trim().length < 10) {
        errors.message = "Message must be at least 10 characters."
    }

    return errors
}

export default function Form() {
    const recaptchaRef = useRef<ReCAPTCHA>(null)  // ✅ ref inside component, correct type

    const [loading, setLoading]   = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors]     = useState<FormErrors>({})
    const [touched, setTouched]   = useState<Partial<Record<keyof FormData, boolean>>>({})

    const [formData, setFormData] = useState<FormData>({
        name: "", email: "", role: "", mobile: "",
        company: "", product: "", revenue: "", source: "", message: "",
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const updated = { ...formData, [e.target.name]: e.target.value }
        setFormData(updated)
        if (touched[e.target.name as keyof FormData]) {
            const newErrors = validate(updated)
            setErrors(prev => ({ ...prev, [e.target.name]: newErrors[e.target.name as keyof FormData] }))
        }
    }

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const field = e.target.name as keyof FormData
        setTouched(prev => ({ ...prev, [field]: true }))
        const newErrors = validate(formData)
        setErrors(prev => ({ ...prev, [field]: newErrors[field] }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const allTouched = Object.keys(formData).reduce((acc, key) => {
            acc[key as keyof FormData] = true
            return acc
        }, {} as Record<keyof FormData, boolean>)
        setTouched(allTouched)

        const validationErrors = validate(formData)
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) return

        // ✅ reCAPTCHA check
        const token = recaptchaRef.current?.getValue()
        if (!token) {
            alert("Please complete the reCAPTCHA.")
            return
        }

        setLoading(true)
        try {
            await addDoc(collection(db, "data"), {
                ...formData,
                createdAt: serverTimestamp(),
            })
            setSubmitted(true)
            recaptchaRef.current?.reset()
        } catch (err) {
            console.error("Error submitting form:", err)
            alert("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    if (submitted) {
        return (
            <section className={styles.section}>
                <div className={styles.formCard}>
                    <h3>Thank you!</h3>
                    <h3>We&apos;ve received your details and will be in touch shortly.</h3>
                </div>
            </section>
        )
    }

    return (
        <section className={styles.section}>
            <div className={styles.left}>
                <h2>Let&apos;s Get Started !!</h2>
                <p>
                    Intelligent publishing systems to elevate<br />
                    your business future, at your fingertips
                </p>
            </div>

            <div className={styles.formCard}>
                <h3>Get in Touch</h3>
                <form onSubmit={handleSubmit} noValidate>

                    <div className={styles.grid2}>
                        <div className={styles.field}>
                            <input name="name" type="text" placeholder="Name*"
                                value={formData.name} onChange={handleChange} onBlur={handleBlur} />
                            {touched.name && errors.name && <span className={styles.error}>{errors.name}</span>}
                        </div>
                        <div className={styles.field}>
                            <input name="email" type="email" placeholder="Business Email*"
                                value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                            {touched.email && errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>
                    </div>

                    <div className={styles.grid2}>
                        <div className={styles.field}>
                            <input name="role" type="text" placeholder="Role*"
                                value={formData.role} onChange={handleChange} onBlur={handleBlur} />
                            {touched.role && errors.role && <span className={styles.error}>{errors.role}</span>}
                        </div>
                        <div className={styles.field}>
                            <input name="mobile" type="tel" placeholder="Mobile* (e.g. +91 98765 43210)"
                                value={formData.mobile} onChange={handleChange} onBlur={handleBlur} />
                            {touched.mobile && errors.mobile && <span className={styles.error}>{errors.mobile}</span>}
                        </div>
                    </div>

                    <div className={styles.grid2}>
                        <div className={styles.field}>
                            <input name="company" type="text" placeholder="Company Name*"
                                value={formData.company} onChange={handleChange} onBlur={handleBlur} />
                            {touched.company && errors.company && <span className={styles.error}>{errors.company}</span>}
                        </div>
                        <div className={styles.field}>
                            <select name="product" value={formData.product} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" disabled>Product / Services*</option>
                                <option value="orion-submit">ORION SUBMIT+</option>
                                <option value="orion-editor">ORION EDITOR+</option>
                                <option value="orion-publish">ORION PUBLISH+</option>
                                <option value="zoho-impl">Business Systems (Zoho)</option>
                                <option value="other">Other</option>
                            </select>
                            {touched.product && errors.product && <span className={styles.error}>{errors.product}</span>}
                        </div>
                    </div>

                    <div className={styles.grid2}>
                        <div className={styles.field}>
                            <select name="revenue" value={formData.revenue} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" disabled>Annual Revenue*</option>
                                <option value="lt-1cr">Below ₹1 Cr</option>
                                <option value="1-5cr">₹1 Cr – ₹5 Cr</option>
                                <option value="5-20cr">₹5 Cr – ₹20 Cr</option>
                                <option value="gt-20cr">Above ₹20 Cr</option>
                            </select>
                            {touched.revenue && errors.revenue && <span className={styles.error}>{errors.revenue}</span>}
                        </div>
                        <div className={styles.field}>
                            <select name="source" value={formData.source} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" disabled>How did you hear about us?</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="google">Google Search</option>
                                <option value="referral">Referral</option>
                                <option value="event">Event / Conference</option>
                                <option value="other">Other</option>
                            </select>
                            {touched.source && errors.source && <span className={styles.error}>{errors.source}</span>}
                        </div>
                    </div>

                    <div className={styles.fullRow}>
                        <div className={styles.field}>
                            <textarea name="message" placeholder="Tell Us How We Can Help!*"
                                value={formData.message} onChange={handleChange} onBlur={handleBlur} />
                            {touched.message && errors.message && <span className={styles.error}>{errors.message}</span>}
                        </div>
                    </div>

                    {/* ✅ Correct reCAPTCHA usage */}
                    <div className={styles.captchaRow}>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        />
                    </div>

                    <div className={styles.submitRow}>
                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}
