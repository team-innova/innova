import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
<footer className="bg-gradient-to-b from-[#11121B] via-[rgba(40, 33, 72, 0.76)] to-[#282148] text-primary py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-start">
      <div className="flex items-start md:items-center md:space-x-8 w-full">
        {/* Logo */}
        <div className="mb-8 md:mb-0 flex-shrink-0">
          <div className="flex">
            <svg className="w-10 h-10 mr-3" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#8B5CF6" />
              <circle cx="20" cy="20" r="15" fill="#3B82F6" />
              <path d="M15 25L25 15M15 15L25 25" stroke="primary" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Columns for About us and Contact us */}
        <div className="grid grid-cols-2 gap-8">
          <div className="mx-8">
            <h3 className="text-lg font-semibold mb-4">About us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-purple-300 transition-colors duration-300">Location</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-300 transition-colors duration-300">Courses</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-300 transition-colors duration-300">Activities</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-300 transition-colors duration-300">Accomodation</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-purple-300 transition-colors duration-300">
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}