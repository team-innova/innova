import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contact from './Contact'
import { ArrowRight } from 'lucide-react'

export default function Landing() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">

            {/* Hero Section */}
            <Nav />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-6xl font-bold mb-4">Innova</h1>
                <p className="text-2xl mb-8">Software, web solutions, ideas</p>
                <p className="text-sm mb-8">Transformamos tus ideas en sitios web personalizados que potencian tu presencia online y optimizan la experiencia digital de tus usuarios.</p>
                <button className="bg-primary text-white px-8 py-3 rounded-md text-lg hover:bg-purple-700">Contactanos</button>
            </section>

            {/* Our Team Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="relative">
                    <div className="absolute top-0 left-0 w-3/5 h-full bg-purple-900 rounded-lg"></div>
                    <div className="relative flex justify-between items-center">
                        <div className="w-3/5">
                            {/* Placeholder for team image or video */}
                            <div className="aspect-video bg-purple-800 rounded-lg"></div>
                        </div>
                        <div className="w-2/5 pl-8 text-right">
                            <h2 className="text-4xl font-bold mb-2">Nuestro equipo</h2>
                            <p className="text-xl text-gray-400 mb-6">¿Quiénes somos?</p>
                            <div className="bg-gray-800 rounded-lg p-6 mb-6">
                                <p className="text-lg text-left">
                                    Somos un equipo de desarrolladores especializados en crear
                                    diseños web modernos y personalizados, que convertimos en
                                    sitios y aplicaciones web funcionales, adaptados a las
                                    necesidades únicas de cada cliente
                                </p>
                            </div>
                            <button className="text-primary rounded-lg hover:underline flex items-center">
                                Conócenos
                                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold mb-8">Nuestros servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="border border-gray-700 rounded-lg p-6">
                            <div className="bg-primary h-12 w-12 rounded-full mb-4 flex items-center justify-center">
                                <span className="text-2xl">💻</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Desarrollo De Sitios Y Aplicaciones Web</h3>
                            <p className="text-gray-400 text-left">Nos encargamos de tu proyecto de forma integral: Planificación, Diseño UX / UI y Programación.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools Section */}
            <section className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8">¿Con que herramientas trabajamos?</h2>
                <div className="grid grid-cols-5 gap-4">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="bg-gray-800 h-20 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🛠️</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-4xl font-bold">Conoce nuestros trabajos</h2>
                        <span className="text-purple-400">Proyectos realizados</span>
                    </div>
                    <div className="relative bg-purple-900 rounded-lg overflow-hidden mb-8">
                        <div className="aspect-video"></div>
                        <div className="absolute top-4 right-4 bg-white bg-opacity-20 p-2 rounded-full">
                            <ArrowRight className="text-white" size={24} />
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                            <span className="text-purple-400 mb-2 block">¿Quiénes somos?</span>
                            <h3 className="text-3xl font-bold mb-2">CEAL Hipoacusia</h3>
                            <p className="text-gray-300 mb-4">
                                Plataforma de cursos para un Centro especializado en audición y lenguaje
                            </p>
                        </div>
                    </div>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
                        <span className="mr-2">Ver todos</span>
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Contact Form */}
            <Contact />

            {/* Footer */}
            <Footer />

        </div>
    )
}