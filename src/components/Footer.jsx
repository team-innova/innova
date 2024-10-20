import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <svg className="w-10 h-10 mr-3" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#8B5CF6" />
                <circle cx="20" cy="20" r="15" fill="#3B82F6" />
                <path d="M15 25L25 15M15 15L25 25" stroke="white" strokeWidth="2" />
              </svg>
              <span className="text-2xl font-bold">Innova</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">Location</a></li>
                <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">Courses</a></li>
                <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">Activities</a></li>
                <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">Accomodation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact us</h3>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-purple-300 transition-colors duration-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}