import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const teamMembers = [
    { name: 'Nombre', role: 'Frontend' },
    { name: 'Nombre', role: 'Frontend' },
    { name: 'Nombre', role: 'Backend' },
    { name: 'Nombre', role: 'Diseñadora UX/UI' },
    { name: 'Nombre', role: 'Tester QA' },
]

export default function About() {
    return (
        <div className="min-h-screen bg-[#191919] text-primary">

            {/* Hero Section */}
            <Nav />

            {/* About Section */}
            <section className="container mx-auto px-12 py-16">
                <p className="text-sm text-[#9857D3]">Conócenos</p>
                <h2 className="text-4xl font-bold mb-2">Sobre nosotros</h2>
                <div className="relative">
                    <div className="absolute top-0 left-0 w-3/5 h-full bg-purple-900 rounded-lg"></div>
                    <div className="relative flex justify-between items-center">
                        <div className=""></div>
                        <div className="pl-8">
                            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mt-32 mb-6">
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
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-12 pb-16">
                <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-center">Nuestro equipo</h3>
                    <p className="text-lg mb-8">
                        Nuestro equipo está compuesto por profesionales apasionados y especializados en distintas áreas clave del desarrollo web.
                        Contamos con desarrolladores frontend que se encargan de crear interfaces intuitivas y responsivas, desarrolladores backend que
                        aseguran que todo funcione perfectamente detrás de escena, un tester QA dedicado a garantizar la calidad y el rendimiento de
                        nuestros proyectos, y una diseñadora UX/UI que se enfoca en ofrecer experiencias digitales atractivas y fáciles de usar. Juntos,
                        nos complementamos para ofrecer soluciones web robustas y a medida, adaptadas a cada cliente.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.slice(0, 5).map((member, index) => (
                            <div
                                key={index}
                                className={`p-4 flex flex-col items-center text-center ${index === teamMembers.slice(0, 5).length - 1 && teamMembers.length % 4 !== 0 ? 'md:col-span-4' : ''}`}
                            >
                                <div className="w-48 h-48 bg-gray-800 rounded-lg mb-4"></div>
                                <h4 className="font-bold">{member.name}</h4>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <ContactForm />

            {/* Footer */}
            <Footer />

        </div >
    )
}