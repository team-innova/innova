export default function Nav() {
    return (
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center">
                <img src="/placeholder.svg?height=40&width=40" alt="Innova logo" className="h-10 w-10 mr-2" />
                <span className="text-2xl font-bold">innova</span>
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:text-primary">Nosotros</a></li>
                    <li><a href="#" className="hover:text-primary">Servicios</a></li>
                    <li><a href="#" className="hover:text-primary">Portfolio</a></li>
                    <li><a href="#" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-700">Contactanos</a></li>
                </ul>
            </nav>
        </header>
    )
}