import Gallery from "../components/Gallery";

const Home = () => {
    return (
        <div className="pt-16">
            <section
                id="about"
                className="min-h-screen flex items-center justify-center bg-background px-4"
            >
                <div className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/api/placeholder/400/400"
                            alt="Profile"
                            className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-primary mb-4">
                            Witaj w moim świecie słodkości
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Tutaj wstaw swój opis. Opowiedz o swojej pasji do pieczenia,
                            doświadczeniu i specjalizacji.
                        </p>
                    </div>
                </div>
            </section>
            <section id="gallery" className="min-h-screen bg-background px-4">
                <div className="max-w-7xl mx-auto py-16">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12">
                        Moje realizacje
                    </h2>
                    <Gallery />
                </div>
            </section>
        </div>
    );
};

export default Home;