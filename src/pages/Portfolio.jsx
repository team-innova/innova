import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-[#191919] text-primary">

            {/* Hero Section */}
            <Nav />

            {/* Services Section */}
            <section className="px-12">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
                        <p className="text-sm text-[#9857D3]">Nuestras creaciones</p>
                    </div>

                    <section className="container mx-auto py-16">
                        <div className="relative">
                            <div className="absolute top-0 right-0 w-3/5 h-full bg-purple-900 rounded-lg">
                            {/* image */}
                            </div>
                            <div className="relative flex justify-between items-center">
                                <div className="pr-8">
                                    <p className="text-sm text-[#9857D3]">Plataforma de cursos</p>
                                    <h2 className="text-4xl font-bold mb-8">CEAL Hipoacusia</h2>
                                    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-6">
                                        <p className="text-lg leading-tight">
                                            A web app for visualizing personalized Spotify data. View your
                                        </p>
                                        <p className="text-lg leading-tight">
                                            top artists, top tracks, recently played tracks, and detailed audio
                                        </p>
                                        <p className="text-lg leading-tight">
                                            information about each track. Create and save new playlists of
                                        </p>
                                        <p className="text-lg leading-tight">
                                            recommended tracks based on your existing playlists and more.
                                        </p>
                                    </div>
                                    <Link to="/about" className="text-[#9857D3] flex items-center">
                                        Conócenos
                                        <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container mx-auto py-16">
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-3/5 h-full bg-purple-900 rounded-lg">
                            {/* image */}
                            </div>
                            <div className="relative flex justify-between items-center">
                                <div className=""></div>
                                <div className="pl-8 text-right">
                                    <p className="text-sm text-[#9857D3]">Plataforma de cursos</p>
                                    <h2 className="text-4xl font-bold mb-8">Ahora español</h2>
                                    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-6 text-left">
                                        <p className="text-lg leading-tight">
                                            A web app for visualizing personalized Spotify data. View your
                                        </p>
                                        <p className="text-lg leading-tight">
                                            top artists, top tracks, recently played tracks, and detailed audio
                                        </p>
                                        <p className="text-lg leading-tight">
                                            information about each track. Create and save new playlists of
                                        </p>
                                        <p className="text-lg leading-tight">
                                            recommended tracks based on your existing playlists and more.
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

                </div>
            </section>

            {/* LatestProject Section */}
            <section className="px-12 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">Conoce nuestro último proyecto</h2>
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