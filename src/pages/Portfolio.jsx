import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contact from './Contact'

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">

            {/* Hero Section */}
            <Nav />

            {/* Portfolio Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
                    <p className="text-purple-400 mb-12">Nuestras creaciones</p>

                    <div className="mb-20">
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="w-full md:w-1/2 mb-8 md:mb-0">
                                <p className="text-purple-400 mb-2">Plataforma de cursos</p>
                                <h3 className="text-3xl font-bold mb-4">CEAL Hipoacusia</h3>
                                <div className="bg-gray-800 h-48 rounded-lg mb-4"></div>
                                <div className="flex space-x-2">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 md:pl-8">
                                <img src="/placeholder.svg?height=300&width=500" alt="CEAL Hipoacusia Wireframe" className="w-full rounded-lg" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
                                <img src="/placeholder.svg?height=300&width=500" alt="Ahora español Wireframe" className="w-full rounded-lg" />
                            </div>
                            <div className="w-full md:w-1/2 md:pl-8 order-1 md:order-2">
                                <p className="text-purple-400 mb-2">Plataforma de cursos</p>
                                <h3 className="text-3xl font-bold mb-4">Ahora español</h3>
                                <p className="mb-4 text-gray-300">
                                    A web app for visualizing personalized Spotify data. View your
                                    top artists, top tracks, recently played tracks, and detailed audio
                                    information about each track. Create and save new playlists of
                                    recommended tracks based on your existing playlists and more.
                                </p>
                                <div className="flex space-x-2">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                </div>
                            </div>
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