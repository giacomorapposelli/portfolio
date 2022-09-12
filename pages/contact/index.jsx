import ContactForm from '../../components/contact-form/contact-form'
import { Fade } from 'react-awesome-reveal'

const ContactPage = () => (
    <section>
        <Fade duration={2000}>
            <h2>
                Contact
                <hr />
            </h2>
        </Fade>
        <ContactForm />
    </section>
)

export default ContactPage
