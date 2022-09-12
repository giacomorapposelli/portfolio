import { useState } from 'react'
import styles from '../../styles/contact.module.css'
import { Fade } from 'react-awesome-reveal'

const ContactForm = () => {
    const [message, setMessage] = useState({})
    const [onSuccess, setOnSuccess] = useState(false)

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const data = await fetch('/api/submit', {
                method: 'POST',
                body: JSON.stringify(message),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            data.json()
            setOnSuccess(true)
            setMessage({})
            setTimeout(() => setOnSuccess(false), 3000)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={styles.formContainer}>
            <Fade duration={2000}>
                <p>Feel free to contact me here.</p>
            </Fade>
            <form method='POST' className={styles.form} onSubmit={handleSubmit}>
                <Fade cascade direction='down' duration={600}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                        value={message.name || ''}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                        value={message.email || ''}
                    />
                    <input
                        type='text'
                        name='subject'
                        placeholder='Subject'
                        required
                        onChange={handleChange}
                        value={message.subject || ''}
                    />
                    <textarea
                        type='text'
                        name='message'
                        rows='6'
                        placeholder='Message'
                        maxLength='500'
                        required
                        onChange={handleChange}
                        value={message.message || ''}
                    ></textarea>
                </Fade>
                <Fade top delay={1600} direction='down'>
                    <button>Submit</button>
                </Fade>
                {onSuccess && (
                    <Fade direction='up'>
                        <p className={styles.success}>
                            Your message has been sent. Thank you!
                        </p>
                    </Fade>
                )}
            </form>
        </div>
    )
}

export default ContactForm
