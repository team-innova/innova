import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contact from './Contact'
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
        <div className="min-h-screen bg-gray-900 text-white">

            {/* Hero Section */}
            <Nav />

            {/* Services Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h3 className="text-purple-400 text-lg mb-2">Lo que ofrecemos</h3>
                        <h2 className="text-4xl font-bold">Servicios</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg p-6">
                                <div className="mb-4">
                                    <Settings className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LatestProject Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Conoce nuestro último proyecto</h2>
                    <h3 className="text-2xl font-semibold mb-4">Pagina de cosos medicos</h3>
                    <p className="mb-8 text-gray-300">
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
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                            Pruébalo aquí
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <Contact />

            {/* Footer */}
            <Footer />

        </div>
    )
}