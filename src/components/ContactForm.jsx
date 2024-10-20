import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="p-16">
            <div className="p-16 rounded-2xl relative overflow-hidden shadow-custom">
                <div className="relative z-10">
                    <p className="text-sm text-[#9857D3] mb-2">Contanos tu idea</p>
                    <h2 className="text-3xl font-bold mb-8">Contactanos</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <form className="w-full md:w-1/2 space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-[#191919] rounded-md border border-[#DCB3E3] focus:ring-2 focus:ring-purple-500 px-4 py-2"
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
                                    className="w-full bg-[#191919] rounded-md border border-[#DCB3E3] focus:ring-2 focus:ring-purple-500 px-4 py-2"
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
                                    className="w-full bg-[#191919] rounded-md border border-[#DCB3E3] focus:ring-2 focus:ring-purple-500 px-4 py-2"
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
                                    className="w-full bg-[#191919] rounded-md border border-[#DCB3E3] focus:ring-2 focus:ring-purple-500 px-4 py-2"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-b from-[#9747FF] to-[#39337A] text-primary px-8 py-3 rounded-lg text-lg"
                            >
                                Enviar
                            </button>
                        </form>
                        <div className="w-full md:w-1/2 flex flex-col justify-between">
                            <div className="mb-8">
                                {/* Logo */}
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <MapPin className="text-[#9747FF] mr-2" size={20} />
                                    <span>545 Mavis Island, IL 99191</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="text-[#9747FF] mr-2" size={20} />
                                    <span>+2034 4040 3030</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="text-[#9747FF] mr-2" size={20} />
                                    <span>hello@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}