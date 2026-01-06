import { useRef } from "react";
import speech1 from "../assets/speech1.mp4";
import leseaux2 from "../assets/leseaux2.mp4";
import leseaux1 from "../assets/clinique leseaux 2.mp4";
import restaurant from "../assets/restaurant.mp4";
import registre from "../assets/Registre ccc.mp4";
import Logo_leseaux from "../assets/logo_leseaux.png";
import logo_ccc from "../assets/logo_ccc.png";
import img33 from "../assets/img2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Service() {
    const services = [
        { id: 1, title: "Registre trafic Conseil Congolais Chargeurs", image: logo_ccc, video: registre, examen: [{ title: "Registre trafic Conseil Congolais Chargeurs", technologie: "React, Node.js, PostgreSQL" }] },

        { id: 2, title: "Site fullStack de la Clinique 'LES EAUX'", image: Logo_leseaux, video: leseaux1, examen: [{ title: "Site fullStack de la Clinique 'LES EAUX'", technologie: "React, Node.js, PostgreSQL" }] },

        { id: 3, title: "Site vitrine de la Clinique 'LES EAUX'", image: Logo_leseaux, video: leseaux2, examen: [{ title: "Site vitrine de la Clinique 'LES EAUX'", technologie: "React" }] },
        { id: 4, title: "restaurant ", image: img33, video: restaurant, examen: [{ title: "restaurant", technologie: "React" }] },
        { id: 5, title: "Blog SpeechMedia", image: img33, video: speech1, examen: [{ title: "Blog SpeechMedia", technologie: "React, Node.js, MySQL" }] },



    ];
    const handleHoverPlay = async (e) => {
        const video = e.currentTarget;
        if (!video) return;

        try {
            video.controls = false;  // s'assure que controls restent cachés
            video.currentTime = 0;
            await video.play();
        } catch (err) {
            console.log("Hover autoplay bloqué", err);
        }
    };

    const handleHoverStop = (e) => {
        const video = e.currentTarget;
        if (!video) return;

        video.pause();
        video.currentTime = 0;
        video.load();  // force retour à l'image (poster)
        video.controls = false; // ⚡ toujours cacher les controls
    };

    const handleFullscreen = async (e) => {
        const video = e.currentTarget;
        if (!video) return;

        video.controls = true;  // ⚡ controls visibles uniquement en fullscreen
        video.muted = false;

        if (video.requestFullscreen) {
            await video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            await video.webkitRequestFullscreen();
        }

        await video.play();
    };
    return (
        <>
            <div className="servicep ">
                <h2 className="service-title stext pb-5">🚀 Mes Projets</h2>
                <div className="row row-cols-1 row-cols-md-3 gx-4 gy-5 pt-5 w-100 service-container">
                    {services.map((service) => (
                        <div key={service.id} className="col px-3">
                            <div className="card h-100 bg-white">
                                <video
                                    src={service.video}
                                    poster={service.image}
                                    className="card-img-top video-preview"
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    controls={false}            // ⚡ controls désactivés par défaut
                                    onPointerEnter={handleHoverPlay}
                                    onPointerLeave={handleHoverStop}
                                    onClick={handleFullscreen}
                                />

                                <div className="card-body service-p d-flex justify-content-between align-items-center">
                                    <h5 className="card-title text-white">{service.title}</h5>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#examensModal-${service.id}`}
                                    >
                                        En Savoir plus...
                                    </button>

                                    {/* <div className="d-flex justify-content-between mt-3">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target={`#examensModal-${service.id}`}
                                            >
                                                Examens
                                            </button>
                                            <button
                                        type="button"
                                        className="btn btn-danger ms-3"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#infoModal-${service.id}`}
                                    >
                                        En savoir plus...
                                    </button>

                                        </div> */}
                                </div>
                            </div>

                            {/* Modal Examens */}
                            <div className="modal fade" id={`examensModal-${service.id}`} tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Examens pour {service.title}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <ul className="list-group">
                                                {service.examen.map((examen) => (
                                                    <li key={examen.id} className="list-group-item">
                                                        {examen.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                Fermer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Info */}
                            <div className="modal fade" id={`infoModal-${service.id}`} tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">À propos de {service.title}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>
                                                { }
                                            </p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                Fermer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Service;
