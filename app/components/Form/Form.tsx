"use client"
import { useState, useRef } from "react"
import styles from "./Form.module.css"
import { db } from "@/firebase/clientApp"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import ReCAPTCHA from "react-google-recaptcha"

import content from "@/content.json"

const formContent = content.form

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
        errors.name = formContent.validation.nameRequired
    } else if (!/^[a-zA-Z\s'-]{2,}$/.test(data.name.trim())) {
        errors.name = formContent.validation.nameInvalid
    }

    if (!data.email.trim()) {
        errors.email = formContent.validation.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
        errors.email = formContent.validation.emailInvalid
    }

    if (!data.role.trim()) {
        errors.role = formContent.validation.roleRequired
    }

    const cleanMobile = data.mobile.replace(/[\s\-().+]/g, "")
    if (!data.mobile.trim()) {
        errors.mobile = formContent.validation.mobileRequired
    } else if (!/^\+?[\d\s\-().]{7,20}$/.test(data.mobile.trim())) {
        errors.mobile = formContent.validation.mobileInvalid
    } else if (cleanMobile.length < 7 || cleanMobile.length > 15) {
        errors.mobile = formContent.validation.mobileLength
    }

    if (!data.company.trim()) {
        errors.company = formContent.validation.companyRequired
    }

    if (!data.product) errors.product = formContent.validation.productRequired
    if (!data.revenue) errors.revenue = formContent.validation.revenueRequired
    if (!data.source) errors.source = formContent.validation.sourceRequired

    if (!data.message.trim()) {
        errors.message = formContent.validation.messageRequired
    } else if (data.message.trim().length < 10) {
        errors.message = formContent.validation.messageMinLength
    }

    return errors
}

export default function Form() {
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})
    const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})

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

        const token = recaptchaRef.current?.getValue()
        if (!token) {
            alert(formContent.validation.recaptchaRequired)
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
            alert(formContent.errorMessage)
        } finally {
            setLoading(false)
        }
    }

    if (submitted) {
        return (
            <section className={styles.section}>
                <div className={styles.formCard}>
                    <h3>{formContent.successTitle}</h3>
                    <h3>{formContent.successMessage}</h3>
                </div>
            </section>
        )
    }

    return (
        <section className={styles.section}>
            <div className={styles.left}>
                <h2>{formContent.leftHeading}</h2>
                <p>
                    {formContent.leftSubtext}
                </p>
            </div>

            <div className={styles.formCard}>
                <h3>{formContent.formTitle}</h3>
                <form onSubmit={handleSubmit} noValidate>

                    <div className={styles.grid2}>
                        <div className={styles.field}>
                            <input name="name" type="text" placeholder={formContent.placeholders.name}
                                value={formData.name} onChange={handleChange} onBlur={handleBlur} />
                            {touched.name && errors.name && <span className={styles.error}>{errors.name}</span>}
                        </div>
                        <div className={styles.field}>
                            <input name="email" type="email" placeholder={formContent.placeholders.email}
                                value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                            {touched.email && errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>
                    </div>

                    <div className={styles.grid2}>
                        <div className={styles.field}>
                            <input name="role" type="text" placeholder={formContent.placeholders.role}
                                value={formData.role} onChange={handleChange} onBlur={handleBlur} />
                            {touched.role && errors.role && <span className={styles.error}>{errors.role}</span>}
                        </div>
                        <div className={styles.field}>
                            <input name="mobile" type="tel" placeholder={formContent.placeholders.mobile}
                                value={formData.mobile} onChange={handleChange} onBlur={handleBlur} />
                            {touched.mobile && errors.mobile && <span className={styles.error}>{errors.mobile}</span>}
                        </div>
                    </div>

                    <div className={styles.grid2}>
                        <div className={styles.field}>
                            <input name="company" type="text" placeholder={formContent.placeholders.company}
                                value={formData.company} onChange={handleChange} onBlur={handleBlur} />
                            {touched.company && errors.company && <span className={styles.error}>{errors.company}</span>}
                        </div>
                        <div className={styles.field}>
                            <select name="product" value={formData.product} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" disabled>{formContent.selects.product.placeholder}</option>
                                {formContent.selects.product.options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            {touched.product && errors.product && <span className={styles.error}>{errors.product}</span>}
                        </div>
                    </div>

                    <div className={styles.grid2}>
                        <div className={styles.field}>
                            <select name="revenue" value={formData.revenue} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" disabled>{formContent.selects.revenue.placeholder}</option>
                                {formContent.selects.revenue.options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            {touched.revenue && errors.revenue && <span className={styles.error}>{errors.revenue}</span>}
                        </div>
                        <div className={styles.field}>
                            <select name="source" value={formData.source} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" disabled>{formContent.selects.source.placeholder}</option>
                                {formContent.selects.source.options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            {touched.source && errors.source && <span className={styles.error}>{errors.source}</span>}
                        </div>
                    </div>

                    <div className={styles.fullRow}>
                        <div className={styles.field}>
                            <textarea name="message" placeholder={formContent.placeholders.message}
                                value={formData.message} onChange={handleChange} onBlur={handleBlur} />
                            {touched.message && errors.message && <span className={styles.error}>{errors.message}</span>}
                        </div>
                    </div>

                    <div className={styles.captchaRow}>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        />
                    </div>

                    <div className={styles.submitRow}>
                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? formContent.submittingButton : formContent.submitButton}
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}
