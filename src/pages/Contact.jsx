import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log({ name, phone, email, message })
    }

    return (
        <div className="bg-gray-900 text-white p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-500 opacity-10 blur-3xl"></div>
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">Contactanos</h2>
                <p className="text-purple-400 mb-8">Contanos tu idea</p>
                <div className="flex flex-col md:flex-row gap-8">
                    <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-gray-800 rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500 px-4 py-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm">Teléfono</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full bg-gray-800 rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500 px-4 py-2"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-gray-800 rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500 px-4 py-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-gray-800 rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500 px-4 py-2"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                        >
                            Enviar
                        </button>
                    </form>
                    <div className="w-full md:w-1/2 flex flex-col justify-between">
                        <div className="mb-8">
                            <svg viewBox="0 0 100 100" className="w-32 h-32 mx-auto">
                                <circle cx="50" cy="50" r="40" fill="#8B5CF6" />
                                <path d="M30 70 L50 30 L70 70 Z" fill="#1F2937" />
                                <text x="50" y="60" fontSize="24" fill="#1F2937" textAnchor="middle">in</text>
                            </svg>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <MapPin className="text-purple-400 mr-2" size={20} />
                                <span>545 Mavis Island, IL 99191</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="text-purple-400 mr-2" size={20} />
                                <span>+2034 4040 3030</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="text-purple-400 mr-2" size={20} />
                                <span>hello@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}