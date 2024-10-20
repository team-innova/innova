import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'


export default function Contact() {
    return (
        <div className="min-h-screen bg-[#191919] text-primary">
            <Nav />
            <ContactForm />
            <Footer />
        </div>
    )
}