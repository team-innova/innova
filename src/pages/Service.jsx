import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { Settings } from 'lucide-react'

const services = [
    {
        title: 'Sitio web',
        description: 'Nuestro equipo está compuesto por profesionales apasionados y especializados en distint'
    },
    {
        title: 'Apps',
        description: 'Nuestro equipo está compuesto por profesionales apasionados y especializados en distint'
    },
    {
        title: 'E-commerce',
        description: 'Nuestro equipo está compuesto por profesionales apasionados y especializados en distint'
    }
]

export default function Service() {
    return (
        <div className="min-h-screen bg-[#191919] text-primary">

            {/* Hero Section */}
            <Nav />

            {/* Services Section */}
            <section className="px-12 py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <p className="text-sm text-[#9857D3]">Lo que ofrecemos</p>
                        <h2 className="text-4xl font-bold mb-12">Servicios</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gradient-to-b from-[rgba(118,60,172,0.2)]  to-[rgba(110,191,244,0.045)] rounded-lg p-6 relative">
                                {/* Ajuste para centrar y posicionar el icono sobre el borde superior */}
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <Settings className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-bold mb-8 text-center">{service.title}</h3>
                                <p className="mb-8">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LatestProject Section */}
            <section className="px-12 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-right">Conoce nuestro último proyecto</h2>
                    <h3 className="text-2xl font-semibold mb-4">Pagina de cosos medicos</h3>
                    <p className="mb-8 ">
                        Nuestro equipo está compuesto por profesionales apasionados y especializados en distintas áreas clave del desarrollo web.
                        Contamos con desarrolladores frontend que se encargan de crear interfaces intuitivas y responsivas, desarrolladores backend que
                        aseguran que todo funcione perfectamente detrás de escena, un tester QA dedicado a garantizar la calidad y el rendimiento de
                        nuestros proyectos, y una diseñadora UX/UI que se enfoca en ofrecer experiencias digitales atractivas y fáciles de usar. Juntos,
                        nos complementamos para ofrecer soluciones web robustas y a medida, adaptadas a cada cliente.
                    </p>
                    <div className="relative aspect-video bg-purple-900 rounded-lg mb-8 flex items-center justify-center">
                        <span className="text-2xl">Video</span>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-gradient-to-b from-[#9747FF] to-[#39337A] text-primary px-8 py-3 rounded-lg text-lg">
                            Pruébalo aquí
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <ContactForm />

            {/* Footer */}
            <Footer />

        </div>
    )
}