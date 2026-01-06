import { useState } from "react";

// Exemple de données de projets
const projets = [
    {
        id: 1,
        title: "Projet Alpha",
        image: "https://via.placeholder.com/300x180?text=Projet+Alpha",
        description: "Description du projet Alpha.",
        details: "Détails supplémentaires sur le projet Alpha.",
    },
    {
        id: 2,
        title: "Projet Beta",
        image: "https://via.placeholder.com/300x180?text=Projet+Beta",
        description: "Description du projet Beta.",
        details: "Détails supplémentaires sur le projet Beta.",
    },
    {
        id: 3,
        title: "Projet Gamma",
        image: "https://via.placeholder.com/300x180?text=Projet+Gamma",
        description: "Description du projet Gamma.",
        details: "Détails supplémentaires sur le projet Gamma.",
    },
    {
        id: 4,
        title: "Projet Delta",
        image: "https://via.placeholder.com/300x180?text=Projet+Delta",
        description: "Description du projet Delta.",
        details: "Détails supplémentaires sur le projet Delta.",
    },
    {
        id: 5,
        title: "Projet Epsilon",
        image: "https://via.placeholder.com/300x180?text=Projet+Epsilon",
        description: "Description du projet Epsilon.",
        details: "Détails supplémentaires sur le projet Epsilon.",
    },
];

const Projet = () => {
    const [showAll, setShowAll] = useState(false);
    const [modalProjet, setModalProjet] = useState(null);

    const projetsAffiches = showAll ? projets : projets.slice(0, 3);

    return (
        <div className="container py-5">
            <h2 className="mb-4 text-center">🚀 Mes Projets</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {projetsAffiches.map((projet) => (
                    <div className="col" key={projet.id}>
                        <div className="card h-100">
                            <img
                                src={projet.image}
                                className="card-img-top"
                                alt={projet.title}
                                style={{ objectFit: "cover", height: "180px" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{projet.title}</h5>
                                <p className="card-text">{projet.description}</p>
                                <button
                                    className="btn btn-primary mt-auto"
                                    onClick={() => setModalProjet(projet)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#projetModal"
                                >
                                    En savoir plus
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                {!showAll && projets.length > 3 && (
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => setShowAll(true)}
                    >
                        Voir plus de projets
                    </button>
                )}
                {showAll && projets.length > 3 && (
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => setShowAll(false)}
                    >
                        Replier les projets
                    </button>
                )}
            </div>

            {/* Modal Bootstrap */}
            <div
                className="modal fade"
                id="projetModal"
                tabIndex="-1"
                aria-labelledby="projetModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="projetModalLabel">
                                {modalProjet?.title}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Fermer"
                                onClick={() => setModalProjet(null)}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <img
                                src={modalProjet?.image}
                                alt={modalProjet?.title}
                                className="img-fluid mb-3"
                            />
                            <p>{modalProjet?.details}</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => setModalProjet(null)}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projet;