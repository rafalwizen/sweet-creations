import { Link } from "react-router-dom";

const Navbar = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-primary font-bold text-3xl font-greatVibes">
                            Sweet Portfolio
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            O mnie
                        </button>
                        <button
                            onClick={() => scrollToSection("gallery")}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            Galeria
                        </button>
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition-colors"
                        >
                            Kontakt
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;