import { useState } from "react";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="cursor-pointer transform transition-transform hover:scale-105"
                        onClick={() => setSelectedImage(image)}
                    >
                        <img
                            src={image}
                            alt={`Cake ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="max-w-4xl w-full mx-4">
                        <img
                            src={selectedImage}
                            alt="Selected cake"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;