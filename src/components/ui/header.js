import { Link } from "react-router"

function Header() {
    return (
        <header className="bg-blue-600 text-white">
            <nav className="container mx-auto px-4 py-4">
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/about" className="hover:underline">About</Link></li>
                    <li><Link to="/profile/1" className="hover:underline">Profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header