import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contact from './Contact'

const teamMembers = [
    { name: 'Nombre', role: 'Frontend' },
    { name: 'Nombre', role: 'Frontend' },
    { name: 'Nombre', role: 'Backend' },
    { name: 'Nombre', role: 'Diseñadora UX/UI' },
    { name: 'Nombre', role: 'Tester QA' },
]

export default function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">

            {/* Hero Section */}
            <Nav />

            {/* About Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold mb-2">Sobre nosotros</h2>
                        <p className="text-purple-400">Conócenos</p>
                    </div>
                    <div className="flex flex-col md:flex-row mb-16">
                        <div className="w-full md:w-1/2 bg-purple-900 rounded-lg aspect-video mb-8 md:mb-0"></div>
                        <div className="w-full md:w-1/2 md:pl-8">
                            <div className="bg-gray-800 rounded-lg p-6">
                                <p className="text-lg">
                                    Somos un equipo de desarrolladores especializados en crear
                                    diseños web modernos y personalizados, que convertimos en
                                    sitios y aplicaciones web funcionales, adaptados a las
                                    necesidades únicas de cada cliente
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold mb-8">Nuestro equipo</h3>
                        <p className="text-lg mb-8">
                            Nuestro equipo está compuesto por profesionales apasionados y especializados en distintas áreas clave del desarrollo web.
                            Contamos con desarrolladores frontend que se encargan de crear interfaces intuitivas y responsivas, desarrolladores backend que
                            aseguran que todo funcione perfectamente detrás de escena, un tester QA dedicado a garantizar la calidad y el rendimiento de
                            nuestros proyectos, y una diseñadora UX/UI que se enfoca en ofrecer experiencias digitales atractivas y fáciles de usar. Juntos,
                            nos complementamos para ofrecer soluciones web robustas y a medida, adaptadas a cada cliente.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {teamMembers.slice(0, 4).map((member, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                                    <div className="w-32 h-32 bg-gray-700 rounded-lg mb-4"></div>
                                    <h4 className="font-bold">{member.name}</h4>
                                    <p className="text-gray-400">{member.role}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-8">
                            <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                                <div className="w-32 h-32 bg-gray-700 rounded-lg mb-4"></div>
                                <h4 className="font-bold">{teamMembers[4].name}</h4>
                                <p className="text-gray-400">{teamMembers[4].role}</p>
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