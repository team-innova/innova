import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Landing() {
    return (
        <div className="min-h-screen bg-[#191919] text-primary">

            {/* Hero Section */}
            <Nav />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-6xl font-bold mb-4">Innova</h1>
                <p className="text-2xl mb-8">Software, web solutions, ideas</p>
                <p className="text-sm leading-tight">Transformamos tus ideas en sitios web personalizados que potencian tu</p>
                <p className="text-sm leading-tight mb-8">presencia online y optimizan la experiencia digital de tus usuarios.</p>
                <Link to="/contact" className="bg-gradient-to-b from-[#9747FF] to-[#39337A] text-primary px-8 py-3 rounded-full text-lg">Contáctanos</Link>
            </section>

            {/* Our Team Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="relative">
                    <div className="absolute top-0 left-0 w-3/5 h-full bg-purple-900 rounded-lg"></div>
                    <div className="relative flex justify-between items-center">
                        <div className=""></div>
                        <div className="pl-8 text-right">
                            <p className="text-sm text-[#9857D3]">¿Quiénes somos?</p>
                            <h2 className="text-4xl font-bold mb-8">Nuestro equipo</h2>
                            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-6 text-left">
                                <p className="text-lg leading-tight">
                                    Somos un equipo de desarrolladores especializados en crear
                                </p>
                                <p className="text-lg leading-tight">
                                    diseños web modernos y personalizados, que convertimos en
                                </p>
                                <p className="text-lg leading-tight">
                                    sitios y aplicaciones web funcionales, adaptados a las
                                </p>
                                <p className="text-lg leading-tight">
                                    necesidades únicas de cada cliente
                                </p>
                            </div>
                            <Link to="/about" className="text-[#9857D3] flex items-center justify-end">
                                Conócenos
                                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="container mx-auto px-4 py-20 text-left">
                <p className="text-sm text-[#9857D3]">¿Qué podemos hacer por vos?</p>
                <h2 className="text-3xl font-bold mb-8">Nuestros servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="p-6"
                            style={{
                                border: '2px solid',
                                borderImageSource: 'linear-gradient(180deg, #049299 0%, #235468 42.5%, #3C2241 94.5%)',
                                borderImageSlice: 1,
                                borderRadius: '1rem'
                            }}
                        >
                            <div className="h-12 w-12 mb-4 flex items-center justify-center">
                                <span className="text-2xl">💻</span>
                            </div>
                            <h3 className="text-xl font-bold mb-8">Desarrollo De Sitios Y Aplicaciones Web</h3>
                            <p className="text-gray-400 text-left mb-8">Nos encargamos de tu proyecto de forma integral: Planificación, Diseño UX / UI y Programación.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools Section */}
            <section className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8 text-center">¿Con que herramientas trabajamos?</h2>
                <div className="grid grid-cols-5 gap-4">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="bg-gray-800 h-20 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🛠️</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="text-primary py-16">
                <div className="container mx-auto px-4 text-right">
                    <p className="text-sm text-[#9857D3] mb-2">Proyectos realizados</p>
                    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-12 ml-12">
                        <h2 className="text-4xl font-bold">Conoce nuestros trabajos</h2>
                    </div>
                    <div className="relative">
                        <div className="relative bg-purple-900 rounded-lg overflow-hidden mb-8">
                            <div className="aspect-video"></div>
                            <div className="absolute top-4 right-4 bg-primary bg-opacity-20 p-2 rounded-full">
                                <ArrowRight className="text-primary" size={24} />
                            </div>
                        </div>
                        <div className="pl-8 text-left">
                            <p className="text-sm text-[#9857D3]">¿Quiénes somos?</p>
                            <h2 className="text-4xl font-bold mb-8">CEAL Hipoacusia</h2>
                            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-6">
                                <p className="text-lg leading-tight">
                                    Plataforma de cursos para un Centro especializado en audición
                                </p>
                                <p className="text-lg leading-tight">
                                    y lenguaje
                                </p>
                            </div>
                            <Link to="/about" className="text-[#9857D3] flex items-center justify-start">
                                Ver todos
                                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
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